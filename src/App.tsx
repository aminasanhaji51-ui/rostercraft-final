import { Link, NavLink, Route, Routes } from 'react-router-dom';
import EnvironmentBanner from './components/EnvironmentBanner';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Trial from './pages/Trial';

export default function App() {
  return (
    <>
      <EnvironmentBanner />
      <header className="site-header">
        <Link to="/" className="logo">
          Rostercraft
        </Link>
        <nav>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/trial" className="button button-small">
            Start a free trial
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/trial" element={<Trial />} />
        </Routes>
      </main>
      <footer className="site-footer">Rostercraft builds staff schedules for restaurants and shops.</footer>
    </>
  );
}
