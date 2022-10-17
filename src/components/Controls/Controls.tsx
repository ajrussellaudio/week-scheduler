import { useControls } from '../../context/Controls';
import { AddEventModal } from '../AddEvent';
import { Container } from './Controls.style';

export type ControlsProps = Record<string, never>;

export const Controls = () => {
  const { showMockEvents, toggleShowMockEvents } = useControls();
  return (
    <Container>
      <AddEventModal />
      <label>
        Show mock events?
        <input type="checkbox" checked={showMockEvents} onChange={toggleShowMockEvents} />
      </label>
    </Container>
  );
};
