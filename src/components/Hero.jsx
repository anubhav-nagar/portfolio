import { TypeAnimation } from 'react-type-animation'
import banner from '../assets/banner.png'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] h-[50vh] mx-auto bg-black'>
        <div className="col-span-1 my-auto mx-auto w-[300px] lg:w-[400px]">
            <img src={banner} alt="banner image" className='w-[360px]'/>
        </div>
        <div className="col-span-2 px-5 my-auto">
            <h1 className='text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold'> 
                <span className='primary-color'>{`I'm a`}</span>
                <br/>
                <TypeAnimation sequence={["Web Developer", 1000, "Data Analyst", 1000]} wrapper="span" speed={50} repeat={Infinity}/>
            </h1>
            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My Name is Anubhav Nagar and I have 2+ years of experience in web development.
            </p>
            <div className="my-8">
                <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'> Download CV </a>
                <a href="#contact" className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
                    Contact
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero