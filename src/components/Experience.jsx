import { MdWorkOutline } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";

const Experience = () => {
  return (
    <div className="max-w-[1200px] mt-12 mx-6 md:mx-auto">
      <div className="text-3xl font-bold primary-color ">Work Experience</div>
      <div className="flex items-start mb-6 max-w-[1000px] mx-auto mt-8">
        <div className="w-1/12 flex items-center">
          <div className="h-[280px] mt-4 w-2 rounded-xl bg-gray-300"></div>
        </div>
        <div>
          <div className="text-slate-400  text-lg">
            <p className="text-2xl primary-color">Software Engineer II</p>
            <div className="flex align-middle mt-1">
              <MdWorkOutline />
              <p className="text-md ml-2 -mt-1">MAQ Software</p>
            </div>
            <div className="flex align-middle mt-1">
            <CiCalendarDate />
            <p className="text-md ml-2 -mt-1">Mar 2024 - Present</p>
            </div>
          </div>
          <div className="text-slate-400  text-lg mt-8">
            <p className="text-2xl primary-color">Software Engineer I</p>
            <div className="flex align-middle mt-1">
              <MdWorkOutline />
              <p className="text-md ml-2 -mt-1">MAQ Software</p>
            </div>
            <div className="flex align-middle mt-1">
            <CiCalendarDate />
            <p className="text-md ml-2 -mt-1">Sep 2022 - Mar 2024</p>
            </div>
          </div>
          <div className="text-slate-400  text-lg mt-8">
            <p className="text-2xl primary-color">Associate Software Engineer</p>
            <div className="flex align-middle mt-1">
              <MdWorkOutline />
              <p className="text-md ml-2 -mt-1">MAQ Software</p>
            </div>
            <div className="flex align-middle mt-1">
            <CiCalendarDate />
            <p className="text-md ml-2 -mt-1">Oct 2021 - Aug 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
