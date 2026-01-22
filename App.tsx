import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { WhatWeDo } from './components/pages/WhatWeDo';
import { HowWeWork } from './components/pages/HowWeWork';
import { Proof } from './components/pages/Proof';
import { Contact } from './components/pages/Contact';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/what-we-do':
        return <WhatWeDo />;
      case '/how-we-work':
        return <HowWeWork />;
      case '/proof':
        return <Proof />;
      case '/contact':
        return <Contact />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Header currentPath={currentPath} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
