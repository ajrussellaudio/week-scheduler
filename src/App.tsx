import { AddEventModal } from './components/AddEvent';
import { EventsProvider } from './context/Events';

function App() {
  return (
    <EventsProvider>
      <AddEventModal />
    </EventsProvider>
  );
}

export default App;
