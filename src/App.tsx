import { AddEventModal } from './components/AddEvent';
import { Calendar } from './components/Calendar';
import { EventsProvider } from './context/Events';

function App() {
  return (
    <EventsProvider>
      <AddEventModal />
      <Calendar />
    </EventsProvider>
  );
}

export default App;
