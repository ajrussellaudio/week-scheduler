import { useControls } from '../../context/Controls';
import { AddEventModal } from '../AddEvent';

export type ControlsProps = Record<string, never>;

export const Controls = () => {
  const { showMockEvents, toggleShowMockEvents } = useControls();
  return (
    <div>
      <AddEventModal />
      <label>
        Show mock events?
        <input type="checkbox" checked={showMockEvents} onChange={toggleShowMockEvents} />
      </label>
    </div>
  );
};
