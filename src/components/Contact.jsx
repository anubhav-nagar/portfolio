import gmail from '../assets/gmail.png'
import linkedin from '../assets/linkedin.webp'
import github from '../assets/github.png'

const Contact = () => {
  return (
    <div className="mx-auto my-auto bg-slate-700 grid grid-cols1 justify-center items-center p-8">
        <div className="text-3xl font-bold primary-color mt-2 mb-8">Conatact Me</div>
        <div className='grid grid-cols-3 items-center'>
            <a href="mailto:anubhavnagar009@gmail.com" target='_blank' className='mr-6'>
                <img src={gmail} alt="gmail" className='w-[60px]'/>
            </a>
            <a href="https://www.linkedin.com/in/anubhav-nagar/" target='_blank'>
                <img src={linkedin} alt="gmail" className='w-[60px]'/>
            </a>
            <a href="https://github.com/anubhav-nagar" target='_blank'>
                <img src={github} alt="gmail" className='w-[60px]'/>
            </a>
        </div>
    </div>
  )
}

export default Contact