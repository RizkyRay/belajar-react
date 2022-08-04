import './App.css';

//Components
import Nav from './components/Nav.js'
import Hero from './components/Hero.js'

function App() {
  const text = "Fireship.io is a gateway drug for developers who want to build awesome web & mobile apps.";
  return (
    <div>
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
