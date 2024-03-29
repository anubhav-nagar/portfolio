import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Links = () => {
  return (
    <div className="text-white bg-slate-500 hidden lg:flex flex-col fixed left-0 top-[30vh] cursor-pointer w-[60px]">
        <a href="https://github.com/anubhav-nagar" className="flex justify-between w-[130px] bg-slate-500 items-center h-14 pl-2 pr-4 pt-2 pb-2 -ml-[72px] hover:ml-0 hover:rounded-r-md duration-300">
            <span className="">Github</span><FaGithub size={25}/>
        </a>
        <a href="https://www.linkedin.com/in/anubhav-nagar/" className="flex justify-between w-[130px] bg-slate-500 items-center h-14 pl-2 pr-4 pt-2 pb-2 -ml-[72px] hover:ml-0 hover:rounded-r-md duration-300">
            LinkedIn<FaLinkedin size={25}/>
        </a>
        <a href="mailto:anubhavnagar009@gmail.com" className="flex justify-between w-[130px] bg-slate-500 items-center h-14 pl-2 pr-4 pt-2 pb-2 -ml-[72px] hover:ml-0 hover:rounded-r-md duration-300">
            Mail<FiMail size={25}/>
        </a>
    </div>
  )
}

export default Links