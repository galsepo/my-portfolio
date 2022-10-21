import Nav from '../components/navigation';
import Intro from '../components/intro';

import { useState } from 'react'
import Projects from '../components/projects';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header />
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        <Intro />
        <Projects />
        <Footer />
      </main>
    </div >
  )
}
