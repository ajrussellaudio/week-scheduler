import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { Event, Weekday, weekdays } from '../../context/Events/types';
import { Form } from './AddEventForm.style';

export type AddEventFormProps = {
  onSubmit: (values: FormValues) => void;
};

type FormValues = {
  days: Weekday[];
  event: Event;
};

export const AddEventForm = ({ onSubmit }: AddEventFormProps) => {
  const { register, handleSubmit } = useForm<FormValues>();
  return (
    <Form onSubmit={handleSubmit((formValues) => onSubmit(formValues))}>
      <label htmlFor="subject">Subject</label>
      <input id="subject" {...register('event.subject', { required: true })} />

      <label htmlFor="start">Start</label>
      <input id="start" type="time" {...register('event.start', { required: true })} />

      <label htmlFor="end">End</label>
      <input id="end" type="time" {...register('event.end', { required: true })} />

      {weekdays.map((weekday) => (
        <Fragment key={weekday}>
          <label htmlFor={weekday}>{weekday}</label>
          <input id={weekday} type="checkbox" value={weekday} {...register('days')} />
        </Fragment>
      ))}

      <button type="submit">Add event</button>
    </Form>
  );
};
