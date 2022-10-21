import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const Nav = ({ darkMode, setDarkMode }) =>
(<nav className='py-10 mb-12 flex justify-between'>
    <h1 className='text-2xl flex items-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 dark:text-white'>Galina Shchepotina</h1>

    <ul className='flex items-center   dark:text-white'>
        {darkMode ?
            <li><BsFillSunFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer mx-5 text-2xl' /></li> :
            <li><BsFillMoonFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer mx-5 text-2xl' /></li>
        }
        <li><a target="_blank" rel="noopener noreferrer" className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-2 rounded-md  hover:scale-110 duration-200 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300' href="https://docs.google.com/document/d/1lXF3787LpTI1P08wESlxofdGkPQqLEgG1YuXNP_brTI/edit">Resume</a></li>
    </ul>
</nav>)

export default Nav;