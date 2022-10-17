import { useMemo } from 'react';
import { useControls } from '../../context/Controls';
import { useEvents } from '../../context/Events';
import { weekdays } from '../../context/Events/types';
import { useMockEvents } from '../../context/MockEvents';
import { combineSchedules } from '../../util/combineSchedules';
import { detectClashes } from '../../util/detectClashes';
import { DayName, Event, EventsList, Grid, Subject, Time } from './Calendar.style';

export type CalendarProps = Record<string, never>;

export function Calendar() {
  const { state: schedule } = useEvents();
  const { showMockEvents } = useControls();
  const mockSchedule = useMockEvents();

  const combinedSchedule = useMemo(
    () => combineSchedules(schedule, showMockEvents ? mockSchedule : {}),
    [showMockEvents, schedule, mockSchedule]
  );

  const eventsWithClashes = useMemo(() => detectClashes(combinedSchedule), [combinedSchedule]);

  return (
    <Grid>
      {weekdays.map((weekday) => {
        const events = eventsWithClashes[weekday] || [];

        return (
          <div key={weekday}>
            <DayName>{weekday}</DayName>
            <EventsList>
              {events.length > 0
                ? events.map((event) => (
                    <Event key={`${weekday} ${event.subject}`} $isClashing={event.isClashing}>
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
