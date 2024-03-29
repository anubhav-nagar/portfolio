import skills from "../data/skillsdata";
import { useEffect, useState } from "react";

const Skills = () => {
    const [currSkill, setCurrSkills] = useState(null);
    const [filteredSkills, setFilteredSkills] = useState([])
    
    function handleSkillClick(category) {
        if(currSkill==category){
            setCurrSkills(null);
        }
        else{
            setCurrSkills(category);
        }
    }

    useEffect(()=>{
        if(currSkill){
            const filtered = skills.filter(skill => skill.category === currSkill);
            setFilteredSkills(filtered);
        }
        else{
            setFilteredSkills(skills);
        }
    }, [currSkill])

  return (
    <div className="max-w-[1200px] my-20 mx-6 md:mx-6 lg:mx-auto">
      <div className="text-3xl font-bold primary-color mb-4 ">Skills</div>
      <div className="mt-4 ml-2 text-xs md:text-xl ">
        <button className={`px-2 md:px-6 py-3 rounded-xl mr-4 border border-gray-400 text-slate-200 w-[80px] md:w-[200px] mb-2 ${currSkill==='webdev' ? 'primary-color' : ' '}`} onClick={()=>{handleSkillClick('webdev')}}>Web Dev</button>
        <button className={`px-2 md:px-6 py-3 rounded-xl mr-4 border border-gray-400 text-slate-200 w-[80px] md:w-[200px] mb-2 ${currSkill==='cloud' ? 'primary-color' : ' '}`} onClick={()=>{handleSkillClick('cloud')}}>Cloud</button>
        <button className={`px-2 md:px-6 py-3 rounded-xl border border-gray-400 text-slate-200 w-[80px] md:w-[200px] mb-2 ${currSkill==='other' ? 'primary-color' : ' '}`} onClick={()=>{handleSkillClick('other')}}>Others</button>
      </div>
      <div className="text-white flex flex-wrap ml-4 mt-6 ">
        {filteredSkills.map((skill) => {
            return(
                <div  key={skill.id} className={`shadow-md hover:scale-105 duration-500 py-2 px-2 m-2 md:m-4 rounded-lg w-[80px] md:w-[200px] ${skill.style}`}>
                    <img src={skill.img} alt="" className="w-10 md:w-20 mx-auto" />
                    <p className="mt-2 md:mt-4 flex justify-center">{skill.name}</p>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Skills;
