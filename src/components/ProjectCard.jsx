const ProjectCard = ({project}) => {
  return (
    <div className='text-slate-200 my-auto bg-white rounded-3xl  w-[300px] mt-8 mr-8 hover:scale-105 transition-all duration-300 ease-in-out self-center'>
        <img src={project.img} alt="project-img" className='rounded-3xl max-h-[240px]' />
        <div className='pt-2 pl-3 pb-3'>
            <a href={project.link} className='text-xl text-slate-800' target='_blank'>{project.name}</a>
            <h5 className='text-sm text-slate-500'>{project.tech}</h5>
        </div>
    </div>
  )
}

export default ProjectCard