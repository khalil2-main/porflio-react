
import { Header } from '../components/Header.jsx';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects.js';



export default function ProjectsGrid() {
return (
  <>
  <title> projects</title>
  <Header/>
    <section className="py-5">
  <div className="container">
  <div className="d-flex justify-content-between align-items-center mb-4">
  <h2 className="h4">Selected projects</h2>
  <a href="/projects" className="small">View all</a>
  </div>
  <div className="row g-4">
  {projects.map(prj => (
  <div className="col-sm-6 col-lg-4" key={prj.id}>
  <ProjectCard p={prj} />
  </div>
  ))}
  </div>
  </div>
  </section>
  </>

);
}