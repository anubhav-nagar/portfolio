import ProjectCard from "./ProjectCard"
import projectData from '../data/projectdata.js'

const Projects = () => {
  return (
    <div className="text-slate-200 max-w-[1200px] my-auto mx-6 md:mx-12 lg:mx-auto">
        <div className="text-3xl font-bold primary-color mt-[40px]">Projects</div>
        <div className="text-sm mt-2">Check out some of my recent work</div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 place-content-center">
        {
          projectData.map((project)=>(
            <ProjectCard project={project} key={project.id}/>
          ))
        }
        </div>
    </div>
  )
}

export default Projects