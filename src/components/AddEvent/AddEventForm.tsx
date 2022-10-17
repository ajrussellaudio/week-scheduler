import { useForm } from 'react-hook-form';
import { Event, Weekday, weekdays } from '../../context/Events/types';

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
    <form onSubmit={handleSubmit((formValues) => onSubmit(formValues))}>
      <label>
        Subject
        <input {...register('event.subject', { required: true })} />
      </label>
      <label>
        Start
        <input type="time" {...register('event.start', { required: true })} />
      </label>
      <label>
        End
        <input type="time" {...register('event.end', { required: true })} />
      </label>
      {weekdays.map((weekday) => (
        <label key={weekday}>
          {weekday}
          <input type="checkbox" value={weekday} {...register('days')} />
        </label>
      ))}
      <button type="submit">Add event</button>
    </form>
  );
};
