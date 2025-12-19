import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Statistics from './components/sections/Statistics';
import Programs from './components/sections/Programs';
import Admissions from './components/sections/Admissions';
import NewsEvents from './components/sections/NewsEvents';
import Documents from './components/sections/Documents';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <Programs />
        <Admissions />
        <NewsEvents />
        <Documents />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
