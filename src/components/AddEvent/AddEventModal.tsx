import { useState } from 'react';
import Modal from 'react-modal';
import { useEvents } from '../../context/Events';
import { Action } from '../../context/Events/reducer';
import { AddEventForm } from './AddEventForm';

export type ModalButtonProps = Record<string, never>;

export const AddEventModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { dispatch } = useEvents();

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const handleSubmit = (values: Action['payload']) =>
    dispatch({ type: 'ADD_EVENT', payload: values });

  return (
    <>
      <button type="button" onClick={open}>
        Add event
      </button>
      <Modal isOpen={isOpen} onRequestClose={close}>
        <AddEventForm onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};
