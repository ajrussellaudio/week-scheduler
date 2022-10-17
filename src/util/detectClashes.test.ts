import { Schedule } from '../context/Events/types';
import { detectClashes } from './detectClashes';

describe('detectClashes', () => {
  it('finds two overlapping events and assigns a flag to them both', () => {
    const schedule: Schedule = {
      Sunday: [
        { subject: 'Brunch', start: '09:00', end: '10:00' },
        { subject: 'Football', start: '15:00', end: '17:00' },
        { subject: 'Roast dinner', start: '16:00', end: '18:00' },
      ],
    };
    expect(detectClashes(schedule)).toEqual({
      Sunday: [
        { subject: 'Brunch', start: '09:00', end: '10:00' },
        { subject: 'Football', start: '15:00', end: '17:00', isClashing: true },
        { subject: 'Roast dinner', start: '16:00', end: '18:00', isClashing: true },
      ],
    });
  });

  it('does not detect non-clashing events', () => {
    const schedule: Schedule = {
      Sunday: [
        { subject: 'Brunch', start: '09:00', end: '10:00' },
        { subject: 'Roast dinner', start: '16:00', end: '18:00' },
      ],
    };
    expect(detectClashes(schedule)).toEqual({
      Sunday: [
        { subject: 'Brunch', start: '09:00', end: '10:00' },
        { subject: 'Roast dinner', start: '16:00', end: '18:00' },
      ],
    });
  });

  it('does not detect events which touch but do not clash', () => {
    const schedule: Schedule = {
      Sunday: [
        { subject: 'Football', start: '15:00', end: '17:00' },
        { subject: 'Roast dinner', start: '17:00', end: '19:00' },
      ],
    };
    expect(detectClashes(schedule)).toEqual({
      Sunday: [
        { subject: 'Football', start: '15:00', end: '17:00' },
        { subject: 'Roast dinner', start: '17:00', end: '19:00' },
      ],
    });
  });
});
