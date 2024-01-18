import Hero from '../../components/hero';
import './style.scss';
import Features from '../../components/features';

export default function Home() {
  return (
    <div className="main">
      <Hero />
      <Features />
    </div>
  );
}
