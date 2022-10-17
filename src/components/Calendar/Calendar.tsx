import { useEvents } from '../../context/Events';

export type CalendarProps = Record<string, never>;

export function Calendar() {
  const { state: schedule } = useEvents();
  return <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(schedule, null, 2)}</pre>;
}
