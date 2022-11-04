
import darlingPet from '../public/darlingPets.jpg'
import furnitureStore from '../public/furniture-store.jpg'
import hooBank from '../public/qFinTech.jpg'

import Image from 'next/image'
import { tooltip, buttonBlue } from './styleComponent'


import { darlingPetsIcons, furnitureStoreIcons, hooBankIcons } from './data';


const Projects = () => (
    <section>
        <div>
            <h3 className='text-3xl py-1 text-blue-900 dark:text-white'>Selected work</h3>
        </div>

        <div className='flex flex-col gap-3 min-w-[255px] sm:flex-row'>

            <div className='flex basis-1/3 flex-col shadow-lg p-2 rounded-xl my-5 border-sky-600 dark:bg-white'>

                <div className=' static basis-1/3'>
                    <a target="_blank" rel="noopener noreferrer" href="https://evening-temple-81007.herokuapp.com/" className='group relative'>
                        <Image className='rounded-lg object-cover hover:scale-110 duration-200'
                            src={darlingPet}
                            layout='responsive' /><span className={tooltip}>VIEW LIVE</span></a>
                </div>

                <div className=' static basis-2/3 top-2'>
                    <h3 className='text-lg  text-center  pt-8 pb-2 font-bold'>Darling Pets</h3>
                    <p className='py-2 text-center'>A social platform about beloved pets</p>
                    <h4 className="py-4 text-blue-500 text-center">Technologies:</h4>
                    <div className='grid grid-cols-3 py-2 gap-2  place-items-center'>
                        {darlingPetsIcons.map((icon) => (
                            <div key={icon.id}>
                                <Image src={icon.img} alt={icon.alt} className="mx-2  overflow-hidden hover:scale-110 duration-200 h-[32px]" />
                                <p className='text-[10px]  text-blue-900 text-center'>{icon.title}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="flex justify-around items-center py-3">
                    <a target="_blank" rel="noopener noreferrer" className={buttonBlue} href="https://evening-temple-81007.herokuapp.com/">LIVE</a>
                    <a target="_blank" rel="noopener noreferrer" className={buttonBlue} href="https://github.com/galsepo/darling-pet">GITHUB</a>
                </div>
            </div>


            <div className='flex basis-1/3 flex-col shadow-lg p-2 rounded-xl my-5 border-sky-600 dark:bg-white'>

                <div className=' static basis-1/3'>
                    <a target="_blank" rel="noopener noreferrer" href="https://gilded-chimera-9160b2.netlify.app/" className='group relative'>
                        <Image className='rounded-lg object-cover hover:scale-110 duration-200'
                            src={furnitureStore}
                            layout='responsive' /><span className={tooltip}>VIEW LIVE</span></a>
                </div>

                <div className=' static basis-2/3 top-2'>
                    <h3 className='text-lg  text-center  pt-8 pb-2 font-bold'>Superniture</h3>
                    <p className='py-2 text-center'>An e-commerce platform to buy furniture</p>
                    <h4 className="py-4 text-blue-500 text-center">Technologies:</h4>
                    <div className='grid grid-cols-3 py-2 gap-2  place-items-center'>
                        {furnitureStoreIcons.map((icon) => (
                            <div key={icon.id}>
                                <Image src={icon.img} alt={icon.alt} className="mx-2  overflow-hidden hover:scale-110 duration-200 h-[32px]" />
                                <p className='text-[10px]  text-blue-900 text-center'>{icon.title}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="flex justify-around items-center py-3">
                    <a target="_blank" rel="noopener noreferrer" className={buttonBlue} href="https://gilded-chimera-9160b2.netlify.app/">LIVE</a>
                    <a target="_blank" rel="noopener noreferrer" className={buttonBlue} href="https://github.com/galsepo/furniture-store">GITHUB</a>
                </div>
            </div>




            <div className='flex basis-1/3 flex-col shadow-lg p-2 rounded-xl my-5 border-sky-600 dark:bg-white'>

                <div className=' static basis-1/3'>
                    <a target="_blank" rel="noopener noreferrer" href="https://thriving-rabanadas-624018.netlify.app/" className='group relative'>
                        <Image className='rounded-lg object-cover hover:scale-110 duration-200'
                            src={hooBank}
                            layout='responsive' /><span className={tooltip}>VIEW LIVE</span></a>
                </div>

                <div className=' static basis-2/3 top-2'>
                    <h3 className='text-lg  text-center  pt-8 pb-2 font-bold'>qFinTech</h3>
                    <p className='py-2 text-center'>Landing page for an outstanding fintech startup</p>
                    <h4 className="py-4 text-blue-500 text-center">Technologies:</h4>
                    <div className='grid grid-cols-3 py-2 gap-2  place-items-center'>
                        {hooBankIcons.map((icon) => (
                            <div key={icon.id}>
                                <Image src={icon.img} alt={icon.alt} className="mx-2  overflow-hidden hover:scale-110 duration-200 h-[32px]" />
                                <p className='text-[10px]  text-blue-900 text-center'>{icon.title}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="flex justify-around items-center py-3">
                    <a target="_blank" rel="noopener noreferrer" className={buttonBlue} href="https://thriving-rabanadas-624018.netlify.app/">LIVE</a>
                    <a target="_blank" rel="noopener noreferrer" className={buttonBlue} href="https://github.com/galsepo/startup-landing-page">GITHUB</a>
                </div>
            </div>



        </div>
    </section >
)
export default Projects;
