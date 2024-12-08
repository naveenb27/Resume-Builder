import './App.css';
import Dashboard from './pages/Dashboard';
import Navigation from './components/Navigation';
import { VisibleProvider } from './context/visibleContext';

function App() {
  return (
    <>
      <Navigation />
      <VisibleProvider>
        <Dashboard />
      </VisibleProvider>
    </>
  );
}

export default App;
