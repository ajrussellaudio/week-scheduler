export const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const;

export type Weekday = typeof weekdays[number];

export type Event = {
  subject: string;
  start: string;
  end: string;
  isClashing?: boolean;
};

export type Schedule = {
  [D in Weekday]?: Event[];
};
