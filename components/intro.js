import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image'
import gala from '../public/gala.webp'

const Intro = () => (
    <div>
        <div className='relative bg-gradient-to-b from-blue-300 rounded-full w-64 h-64 mt-5 mx-auto overflow-hidden'>
            <Image className='transition ease-in-out delay-150 hover:scale-110 duration-300' src={gala} layout='fill' objectFit='cover' />
        </div>

        <div className='text-center p-5'>
            <h2 className='text-3xl py-2 md:text-4xl text-blue-900 dark:text-white'>👋Hello! I&apos;m Galina</h2>
            <p className='text-md py-35 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto md:h-46 md:w-96 dark:text-white'>
                A Front-end developer based in San Francisco.
                I am eager to start developing web based applications which looks beautiful and attract a lot of customers.💸
            </p>
        </div>


        <div className='flex justify-center gap-4 mt-5 dark:text-white text-3xl'>
            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/galsepo" >
                <AiFillLinkedin className='cursor-pointer' />
            </a>

            <a target="_blank" rel="noopener noreferrer" href="https://github.com/galsepo" >
                <AiFillGithub className='cursor-pointer' />
            </a>
        </div>
    </div>
)

export default Intro;