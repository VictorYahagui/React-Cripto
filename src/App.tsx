import './styles/global.css'

//Hooks
import { useState } from 'react'

//Component
import { Hero } from './components/Hero'
import { Header } from './components/Header'
import { NavMobile } from './components/NavMobile';
import { Stats } from './components/Stats';
import { Why } from './components/Why';
import { Calculate } from './components/Calculate';
import { Trade } from './components/Trade';
import { Features } from './components/Features';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export function App() {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <section className="bg-newsletter bg-no-repeat bg-cover overflow-hidden">
      <Header onOpen={(isOpen) => setNavMobile(isOpen)} />
      <Hero />
      {/* Mobile Nav */}
      <div className={`${navMobile ? 'right-0' : '-right-full'} fixed z-10 top-0 h-full transition-all duration-400`}>
        <NavMobile onOpen={(isOpen) => setNavMobile(isOpen)} />
      </div>
      <Stats />
      <Why />
      <Calculate />
      <Trade />
      <Features />
      <Newsletter />
      <Footer />
      <div className='h-500px]'>

      </div>
    </section >
  )
}