import FilterWork from './FilterWork';
import './WorkLayout.css'
import CardWork from '../../common/CardWork/CardWork'
import ProjectData from '../../../Data/projects.json'
import ModalWork from './ModalWork'
import ModalWorkLayout from './ModalWorkLayout'
export default function WorkLayout(){
    let projects = ProjectData
    ModalWork()
    FilterWork()
    return (
        <section className="work section" id="work">
                <span className="section__subtitle">Mi Portafolio</span>
                <h2 className="section__title">Trabajos recientes</h2>

                <div className="work__filters">
                    <span className="work__item active-work" data-filter='all'>Todos</span>
                    <span className="work__item" data-filter='.web'>Web</span>
                    <span className="work__item" data-filter='.movil'>Movil</span>
                    {/* <span className="work__item" data-filter='.design'>Diseño</span> */}
                </div>

                <div className="work__container container grid">
                    {
                        projects.map(project =>  
                        <CardWork key={project.key} 
                                  title={project.title} 
                                  img={project.img}
                                  typeProject={project.typeProject} 
                                  typeInfoProject={project.typeInfoProject}
                                  projectURL={project.projectURL}/>
                        )
                    }
                </div>
                {
                        projects.map(project =>  
                        <ModalWorkLayout key={project.key} 
                                  title={project.title} 
                                  description={project.description}
                                  typeProject={project.typeProject} />
                        )
                    }
            </section>
    )
}