import { Link } from 'react-router-dom';
import TimeEstimator from '../components/TimeEstimator';

const FEATURES = [
  { title: 'Drag-and-drop rosters', text: 'Build next week in minutes, from last week or from a template.' },
  { title: 'Availability built in', text: 'Your team sends its availability; conflicts show before you publish.' },
  { title: 'Labour cost at a glance', text: 'See the cost of each shift and of the whole week while you plan.' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Schedules your team can live with</h1>
        <p>Rostercraft builds staff schedules for restaurants and shops, in minutes instead of evenings.</p>
        <Link to="/trial" className="button">
          Start a free trial
        </Link>
      </section>
      <TimeEstimator />
      <section className="features">
        {FEATURES.map((feature) => (
          <article key={feature.title} className="card">
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>
    </>
  );
}
