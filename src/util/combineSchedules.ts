import { sortBy } from 'lodash';
import { Event, Schedule, weekdays } from '../context/Events/types';

export function combineSchedules(...schedules: Schedule[]): Schedule {
  return weekdays.reduce((prev, weekday) => {
    const eventsList: (Event | undefined)[] = schedules
      .map((schedule) => (schedule ? schedule[weekday] : undefined))
      .filter((schedule) => Boolean(schedule))
      .flat();
    const sortedEventsList = sortBy(eventsList, 'start');
    return {
      ...prev,
      [weekday]: sortedEventsList?.length > 0 ? sortedEventsList : undefined,
    };
  }, {});
}
