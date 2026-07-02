import React, { useState } from 'react'
import './ServiceLayout.css'

const services = [
    {
        id: 1,
        featured: true,
        icon: 'bx-bot',
        title: 'IA & Automatización',
        tagline: 'Bots que venden y atienden a tus clientes 24/7',
        description: 'Agentes de IA listos para producción: atienden WhatsApp, llaman a tus leads y automatizan procesos completos mientras tu equipo se enfoca en cerrar ventas.',
        items: [
            'Chatbot de WhatsApp con IA que responde texto y notas de voz',
            'Agente de voz que llama, califica leads y hace seguimiento solo',
            'Automatización de procesos con n8n conectando tus herramientas',
            'IA entrenada con la información de TU negocio (RAG)',
            'Escalación automática a asesor humano cuando hace falta',
        ],
        result: 'Hasta 80% de las consultas resueltas sin intervención humana',
        cta: 'Quiero mi bot con IA',
    },
    {
        id: 2,
        icon: 'bx-layout',
        title: 'Producto & Web',
        tagline: 'De la idea a una app en producción',
        description: 'Más de 7 años construyendo productos digitales de calidad: desde landing pages que convierten hasta plataformas SaaS completas, web y móvil.',
        items: [
            'Aplicaciones web modernas (React, Next.js)',
            'Apps móviles publicadas en App Store y Play Store',
            'Plataformas SaaS multi-tenant con panel de administración',
            'Interfaces UX que tus usuarios disfrutan usar',
        ],
        result: 'Productos usados por más de 200.000 usuarios',
        cta: 'Cotizar mi proyecto',
    },
    {
        id: 3,
        icon: 'bx-data',
        title: 'Backend & Datos',
        tagline: 'La base sólida que tu negocio necesita',
        description: 'Arquitecturas y bases de datos que aguantan el crecimiento: APIs rápidas, datos seguros y sistemas que no se caen.',
        items: [
            'APIs escalables con Node.js y Java',
            'Bases de datos PostgreSQL, Oracle y MySQL bien diseñadas',
            'Seguridad de la información y buenas prácticas',
            'Experiencia en sector bancario internacional',
        ],
        result: 'Sistemas bancarios y SIG en producción por años',
        cta: 'Hablemos de tu sistema',
    },
    {
        id: 4,
        icon: 'bx-git-merge',
        title: 'Integraciones & APIs',
        tagline: 'Todas tus herramientas trabajando juntas',
        description: 'Conecto tus sistemas para que la información fluya sola: pagos, mapas, autenticación, CRMs, WhatsApp, lo que tu operación necesite.',
        items: [
            'WhatsApp Business API, Twilio y ElevenLabs',
            'OpenAI y otros modelos de IA en tus flujos',
            'Servicios en la nube (Azure, Fly.io) y Docker',
            'Autenticación, mapas, pagos y APIs de terceros',
        ],
        result: 'Cero trabajo manual copiando datos entre sistemas',
        cta: 'Integrar mis sistemas',
    },
]

export default function ServiceLayout(){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(toggleState === index ? 0 : index);
    }

    return (
        <section className="services section" id="services">
            <span className="section__subtitle">Mi servicio</span>
            <h2 className="section__title">Lo que ofrezco</h2>
            <p className="services__intro">
                Soluciones que se pagan solas: menos trabajo manual, más clientes atendidos
                y sistemas que funcionan mientras duermes.
            </p>

            <div className="services__container container grid">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`services__card ${service.featured ? 'services__card-featured' : ''} ${toggleState === service.id ? 'services__card-active' : ''}`}
                        onClick={() => toggleTab(service.id)}
                    >
                        {service.featured && (
                            <span className="services__badge">
                                <i className='bx bxs-hot'></i> Más solicitado
                            </span>
                        )}

                        <div className="services__card-content">
                            <i className={`bx ${service.icon} services__icon-card`}></i>
                            <h3 className="services__title">{service.title}</h3>
                            <p className="services__tagline">{service.tagline}</p>

                            <span className="services__button">
                                {toggleState === service.id ? 'Ver menos' : 'Ver mas'}{' '}
                                <i className={`bx ${toggleState === service.id ? 'bx-up-arrow-alt' : 'bx-right-arrow-alt'}`}></i>
                            </span>
                        </div>

                        <div className={`services__info-container ${toggleState === service.id ? 'active-info' : ''}`}>
                            <p className="services__description">{service.description}</p>

                            <ul className="services__list">
                                {service.items.map((item) => (
                                    <li className="services__item" key={item}>
                                        <i className='bx bx-check services__icon'></i>
                                        <p className="services__info">{item}</p>
                                    </li>
                                ))}
                            </ul>

                            <p className="services__result">
                                <i className='bx bx-trending-up'></i> {service.result}
                            </p>

                            <a
                                href="#contact"
                                className="services__cta"
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`${service.cta} - ir al formulario de contacto`}
                            >
                                {service.cta} <i className='bx bx-right-arrow-alt'></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
