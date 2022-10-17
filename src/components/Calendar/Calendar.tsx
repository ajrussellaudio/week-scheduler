import { useMemo } from 'react';
import { useControls } from '../../context/Controls';
import { useEvents } from '../../context/Events';
import { weekdays } from '../../context/Events/types';
import { useMockEvents } from '../../context/MockEvents';
import { combineSchedules } from '../../util/combineSchedules';
import { DayName, Event, EventsList, Grid, Subject, Time } from './Calendar.style';

export type CalendarProps = Record<string, never>;

export function Calendar() {
  const { state: schedule } = useEvents();
  const { showMockEvents } = useControls();
  const mockSchedule = useMockEvents();

  const combinedSchedule = useMemo(
    () => combineSchedules(schedule, showMockEvents ? mockSchedule : undefined),
    [showMockEvents, schedule, mockSchedule]
  );

  return (
    <Grid>
      {weekdays.map((weekday) => {
        const events = combinedSchedule[weekday] || [];

        return (
          <div key={weekday}>
            <DayName>{weekday}</DayName>
            <EventsList>
              {events.length > 0
                ? events.map((event) => (
                    <Event key={`${weekday} ${event.subject}`}>
                      <Subject>{event.subject}</Subject>
                      <Time>
                        <time>{event.start}</time> - <time>{event.end}</time>
                      </Time>
                    </Event>
                  ))
                : 'No events'}
            </EventsList>
          </div>
        );
      })}
    </Grid>
  );
}
