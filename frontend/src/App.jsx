import './App.css';
import Dashboard from './pages/Dashboard';
import Navigation from './components/Navigation';
import { VisibleProvider } from './context/visibleContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <Home />
              </>
            }
          />
          <Route
            path="/user"
            element={
              <VisibleProvider>
                <Navigation />
                <Dashboard />
              </VisibleProvider>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
