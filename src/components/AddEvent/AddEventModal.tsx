import { useState } from 'react';
import Modal from 'react-modal';
import { useEvents } from '../../context/Events';
import { Action } from '../../context/Events/reducer';
import { Button } from '../Button';
import { AddEventForm } from './AddEventForm';

Modal.setAppElement('#root');

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
      <Button type="button" onClick={open}>
        Add event
      </Button>
      <Modal isOpen={isOpen} onRequestClose={close}>
        <AddEventForm onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};
