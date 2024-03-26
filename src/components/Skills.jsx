import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'
import s5 from '../assets/s5.png'
import s6 from '../assets/s6.png'
import s7 from '../assets/s7.png'
import s8 from '../assets/s8.jpg'
import s9 from '../assets/s9.png'

const Skills = () => {
  return (
    <div className='max-w-[1200px] mx-auto my-auto mt-12 mb-10'>
      <div className='text-3xl font-bold primary-color mb-4'>Skills</div>
      <div className="text-white flex flex-wrap ml-4">
        <img src={s1} alt="image" className='rounded-lg h-[60px] w-[100px] md:h-[100px] md:w-[150px] object-fill mr-4 mt-2'/>
        <img src={s4} alt="image" className='rounded-lg h-[60px] w-[100px] md:h-[100px] md:w-[150px] object-fill mr-4 mt-2'/>
        <img src={s2} alt="image" className='rounded-lg h-[60px] w-[100px] md:h-[100px] md:w-[150px] object-fill mr-4 mt-2'/>
        <img src={s3} alt="image" className='rounded-lg h-[60px] w-[100px] md:h-[100px] md:w-[150px] object-fill mr-4 mt-2'/>
        <img src={s5} alt="image" className='rounded-lg h-[60px] w-[100px] md:h-[100px] md:w-[150px] object-fill mr-4 mt-2'/>
        <img src={s6} alt="image" className='rounded-lg h-[60px] w-[100px] md:h-[100px] md:w-[150px] object-fill mr-4 mt-2'/>
        <img src={s7} alt="image" className='rounded-lg h-[60px] w-[100px] md:h-[100px] md:w-[150px] object-fill mr-4 mt-2'/>
        <img src={s9} alt="image" className='rounded-lg h-[60px] w-[100px] md:h-[100px] md:w-[150px] object-fill mr-4 mt-2'/>
        <img src={s8} alt="image" className='rounded-lg h-[60px] w-[100px] md:h-[100px] md:w-[150px] object-fill mr-4 mt-2'/>
      </div>
    </div>
  )
}

export default Skills