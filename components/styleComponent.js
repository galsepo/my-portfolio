// import Image from 'next/image'

// function ImageWithTooltip({ src, alt, tip }) {
//     return <div >
//         <Image src={src} alt={alt} className='group relative' />
//         <span class="absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-48 px-2 py-1 bg-blue-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-blue-500">{tip}</span>
//     </div>
// }

// export default ImageWithTooltip


export const tooltip = `absolute hidden group-hover:flex justify-center   -translate-y-14 w-full px-4 py-2 backdrop-brightness-50 bg-white/30 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 `

export const buttonBlue = `relative bottom-4 items-center  text-center bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300`