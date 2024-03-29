const ProjectCard = ({project}) => {
  return (
    <div className='text-slate-200 my-auto rounded-lg  w-[250px] md:w-[300px] mt-8 mr-8 hover:scale-105 transition-all duration-300 ease-in-out shadow-md shadow-blue-300'>
        <img src={project.img} alt="project-img" className='rounded-t-lg max-h-[240px]' />
        <div className='pt-2 pl-3 pb-3 rounded-b-3xl'>
            <a href={project.link} className='text-xl primary-color' target='_blank'>{project.name}</a>
            <h5 className='text-sm text-white'>{project.tech}</h5>
        </div>
    </div>
  )
}

export default ProjectCard