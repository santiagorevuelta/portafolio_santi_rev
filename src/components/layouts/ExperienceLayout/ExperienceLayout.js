import React from 'react';
import './ExperienceLayout.css';

const experiences = [
    {
        company: 'SERI S.A.S. — serisas.com',
        role: 'CEO & Fundador',
        period: '2024 – Actualidad',
        description: 'Fundador y director de SERI S.A.S., empresa de desarrollo de software y consultoría en TI. Lidero la estrategia, la relación con clientes y la entrega de soluciones a la medida: aplicaciones web y móviles, chatbots con IA y automatización de procesos de negocio.'
    },
    {
        company: 'Soluciones Apps',
        role: 'Líder técnico',
        period: 'Mar 2026 – Actualidad',
        description: 'Liderazgo técnico de equipos de desarrollo en la construcción de aplicaciones móviles y web. Definición de arquitectura, estándares de código y revisión técnica de entregas. Desarrollo con React Native y React.js, integración de servicios backend y acompañamiento al equipo en buenas prácticas, calidad y despliegue a producción.'
    },
    {
        company: 'Sofka TECHNOLOGIES',
        role: 'Desarrollador de software',
        period: 'Sep 2025 – Mar 2026',
        description: 'Liderazgo técnico en el desarrollo de una billetera digital para un prestigioso banco de Honduras. Implementación de aplicaciones móviles multiplataforma con React Native, arquitecturas limpias, optimización de rendimiento y gestión de estados complejos con Redux. Responsable del ciclo de vida completo en tiendas, incluyendo la preparación y despliegue exitoso en App Store y Play Store. Mentoría a desarrolladores junior y colaboración estrecha con equipos de diseño UX/UI.'
    },
    {
        company: 'HYG Consultores',
        role: 'Desarrollador de software',
        period: 'May 2019 – Sep 2025',
        description: 'Análisis, diseño y desarrollo integral de sistemas de información empresarial. Creación de aplicaciones móviles robustas para Android y iOS utilizando React Native. Desarrollo de plataformas web escalables con React.js. Implementación de soluciones geoespaciales con PostGIS y Leaflet.js. Gestión de bases de datos PostgreSQL y Oracle.'
    },
    {
        company: 'Tysa',
        role: 'Desarrollador de software',
        period: 'Nov 2022 - May 2023',
        description: 'Desarrollo enfocado en movilidad para el sector transporte. Creación y mantenimiento de aplicaciones críticas con React Native, asegurando alta disponibilidad y sincronización de datos en tiempo real.'
    },
    {
        company: 'Proyectos independientes',
        role: 'Desarrollador Freelance',
        period: 'Remoto',
        description: 'Consultoría y desarrollo a medida para diversos clientes. Especialización en el ecosistema JavaScript (React, Node.js). Diseño de interfaces intuitivas y modernas. Integración de servicios en la nube (Azure) y despliegue automatizado con Docker.'
    }
];

export default function ExperienceLayout() {
    return (
        <section className="experience section" id="experience">
            <span className="section__subtitle">Trayectoria</span>
            <h2 className="section__title">Experiencia Laboral</h2>

            <div className="experience__container container grid">
                {experiences.map((exp, index) => (
                    <div className="experience__card" key={index}>
                        <div className="experience__header">
                            <i className='bx bx-briefcase-alt experience__icon'></i>
                            <div>
                                <h3 className="experience__company">{exp.company}</h3>
                                <span className="experience__period">{exp.period}</span>
                            </div>
                        </div>
                        <h4 className="experience__role">{exp.role}</h4>
                        <p className="experience__description">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
