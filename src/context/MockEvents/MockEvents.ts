import { Schedule } from '../Events/types';
import mockEvents from './mockEvents.json';

export function useMockEvents() {
  return mockEvents as Schedule;
}
