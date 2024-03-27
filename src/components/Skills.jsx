import s21 from '../assets/s21.png'
import s23 from '../assets/s23.png'
import s24 from '../assets/s24.png'
import s22 from '../assets/s22.png'
import s5 from '../assets/s5.png'
import s6 from '../assets/s6.png'
import s7 from '../assets/s7.png'
import s8 from '../assets/s8.jpg'
import s9 from '../assets/s9.png'

const Skills = () => {
  return (
    <div className='max-w-[1200px] my-auto mt-12 mb-10 mx-6 md:mx-auto'>
      <div className='text-3xl font-bold primary-color mb-4'>Skills</div>
      <div className="text-white flex flex-wrap ml-4">
        <img src={s21} alt="image" className='rounded-lg h-[60px] w-[80px] md:h-[100px] md:w-[150px] mr-4 mt-2 '/>
        <img src={s22} alt="image" className='rounded-lg h-[60px] w-[80px] md:h-[100px] md:w-[150px] mr-4 mt-2'/>
        <img src={s23} alt="image" className='rounded-lg h-[60px] w-[80px] md:h-[100px] md:w-[150px] object-fill mr-4 mt-2'/>
        <img src={s24} alt="image" className='rounded-lg h-[60px] w-[80px] md:h-[100px] md:w-[150px] object-fill mr-4 mt-2'/>
        <img src={s5} alt="image" className='rounded-lg h-[60px] w-[80px] md:h-[100px] md:w-[150px] object-fill mr-4 mt-2'/>
        <img src={s6} alt="image" className='rounded-lg h-[60px] w-[80px] md:h-[100px] md:w-[150px] object-fill mr-4 mt-2'/>
        <img src={s7} alt="image" className='rounded-lg h-[60px] w-[80px] md:h-[100px] md:w-[150px] object-fill mr-4 mt-2'/>
        <img src={s9} alt="image" className='rounded-lg h-[60px] w-[80px] md:h-[100px] md:w-[150px] object-fill mr-4 mt-2'/>
        <img src={s8} alt="image" className='rounded-lg h-[60px] w-[80px] md:h-[100px] md:w-[150px] object-fill mr-4 mt-2'/>
      </div>
    </div>
  )
}

export default Skills