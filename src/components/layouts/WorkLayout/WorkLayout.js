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

                <div className="work__filters" role="group" aria-label="Filtrar proyectos por categoría">
                    {[
                        { filter: 'all', label: 'Todos' },
                        { filter: '.ia', label: 'IA & Bots' },
                        { filter: '.web', label: 'Web' },
                        { filter: '.movil', label: 'Movil' },
                        { filter: '.design', label: 'Diseño' },
                    ].map(({ filter, label }) => (
                        <span
                            key={filter}
                            className={`work__item ${filter === 'all' ? 'active-work' : ''}`}
                            data-filter={filter}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault()
                                    e.currentTarget.click()
                                }
                            }}
                        >
                            {label}
                        </span>
                    ))}
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
