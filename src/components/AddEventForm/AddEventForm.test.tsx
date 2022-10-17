import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddEventForm, AddEventFormProps } from './AddEventForm';

const defaultProps: AddEventFormProps = {
  onSubmit: () => null,
};

const renderComponent = (props: Partial<AddEventFormProps> = {}) =>
  render(<AddEventForm {...defaultProps} {...props} />);

describe('AddEventForm', () => {
  it('allows a new event to be added', async () => {
    const onSubmit = jest.fn();
    renderComponent({ onSubmit });
    const user = userEvent.setup();

    // Enter subject
    await user.type(screen.getByLabelText(/subject/i), 'My first appointment');

    // Enter start time
    await user.type(screen.getByLabelText(/start/i), '12:00');

    // Enter end time
    await user.type(screen.getByLabelText(/end/i), '13:45');

    // Enter days
    await user.click(screen.getByLabelText(/monday/i));
    await user.click(screen.getByLabelText(/wednesday/i));
    await user.click(screen.getByLabelText(/friday/i));

    // Submit
    await user.click(screen.getByRole('button', { name: /add event/i }));

    expect(onSubmit).toBeCalledWith({
      days: ['Monday', 'Wednesday', 'Friday'],
      event: {
        subject: 'My first appointment',
        start: '12:00',
        end: '13:45',
      },
    });
  });
});
