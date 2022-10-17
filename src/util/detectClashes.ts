import { reject } from 'lodash';
import { Event, Schedule, Weekday } from '../context/Events/types';

function toDate(time: string): Date {
  const [hours, minutes] = time.split(':').map(Number);
  const date = new Date(0);
  date.setHours(hours, minutes);
  return date;
}

function timeOverlaps(event: Event, others: Event[]): boolean {
  const [eventStart, eventEnd] = [event.start, event.end].map(toDate);
  return others.some((other) => {
    const [otherStart, otherEnd] = [other.start, other.end].map(toDate);
    const startOverlaps = eventStart >= otherStart && eventStart < otherEnd;
    const endOverlaps = eventEnd > otherStart && eventEnd <= otherEnd;
    return startOverlaps || endOverlaps;
  });
}

export function detectClashes(schedule: Schedule): Schedule {
  return Object.keys(schedule).reduce((prev, weekday) => {
    const eventsWithClashes = schedule[weekday as Weekday]?.map((event, _, events) => {
      return timeOverlaps(event, reject(events, event)) ? { ...event, isClashing: true } : event;
    });
    return {
      ...prev,
      [weekday]: eventsWithClashes,
    };
  }, {});
}
