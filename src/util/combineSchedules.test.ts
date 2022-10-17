import { Schedule } from '../context/Events/types';
import { combineSchedules } from './combineSchedules';

describe('combineSchedules', () => {
  it('combines two schedules', () => {
    const schedule1: Schedule = {
      Sunday: [{ subject: 'Football', start: '15:00', end: '17:00' }],
    };
    const schedule2: Schedule = {
      Sunday: [{ subject: 'Roast dinner', start: '18:00', end: '21:00' }],
    };
    expect(combineSchedules(schedule1, schedule2)).toEqual({
      Sunday: [
        { subject: 'Football', start: '15:00', end: '17:00' },
        { subject: 'Roast dinner', start: '18:00', end: '21:00' },
      ],
    });
  });

  it('combines two schedules, sorting by start time', () => {
    const schedule1: Schedule = {
      Sunday: [{ subject: 'Roast dinner', start: '18:00', end: '21:00' }],
    };
    const schedule2: Schedule = {
      Sunday: [{ subject: 'Football', start: '15:00', end: '17:00' }],
    };
    expect(combineSchedules(schedule1, schedule2)).toEqual({
      Sunday: [
        { subject: 'Football', start: '15:00', end: '17:00' },
        { subject: 'Roast dinner', start: '18:00', end: '21:00' },
      ],
    });
  });

  it('combines a schedule with undefined', () => {
    const schedule1: Schedule = {
      Sunday: [{ subject: 'Football', start: '15:00', end: '17:00' }],
    };
    const schedule2 = undefined;
    expect(combineSchedules(schedule1, schedule2)).toEqual({
      Sunday: [{ subject: 'Football', start: '15:00', end: '17:00' }],
    });
  });
});
