import './ProductsLayout.css'

const products = [
    {
        key: 'wpai-studio',
        name: 'WP AI Studio',
        pitch: 'SaaS de chatbots con IA para WhatsApp Business. Atiende clientes 24/7 con texto y notas de voz, entrenado con la información de tu negocio.',
        img: 'wpai-studio.svg',
        status: 'En producción',
        featured: true,
        url: 'https://wpai-studio.fly.dev/',
        features: [
            'Bots entrenables con base de conocimiento (RAG)',
            'Responde audios con voz sintetizada (STT/TTS)',
            'Escalación automática a asesor humano en vivo',
            'Panel con métricas y control de consumo',
        ],
        tags: ['IA', 'WhatsApp', 'n8n', 'OpenAI', 'SaaS'],
    },
    {
        key: 'callbot',
        name: 'Call Bot IA',
        pitch: 'Agente de voz que llama a tus leads, los saluda con voz natural, hace preguntas de calificación y decide si son clientes viables.',
        img: 'callbot.svg',
        status: 'En producción',
        features: [
            'Llamadas salientes con voz conversacional IA',
            'Califica leads: presupuesto, plazo e interés',
            'Transcripción completa y tags automáticos',
            'Seguimiento automático por WhatsApp al colgar',
        ],
        tags: ['Voz IA', 'Twilio', 'ElevenLabs', 'CRM'],
    },
    {
        key: 'seriasses',
        name: 'Seriasses',
        pitch: 'Sistema de control de ingreso y salida de personal con lector de huella. Registro biométrico confiable, sin planillas ni suplantación.',
        img: 'seriasses.svg',
        status: 'En producción',
        features: [
            'Registro de entradas y salidas con huella digital',
            'Identificación biométrica en segundos',
            'Historial y reportes de asistencia',
            'Ideal para empresas, conjuntos y obras',
        ],
        tags: ['Biometría', 'Control de acceso', 'Reportes'],
    },
    // FactuBot apagado por ahora — restaurar aquí cuando vuelva a estar activo
]

export default function ProductsLayout(){
    return (
        <section className="products section" id="software">
            <span className="section__subtitle">Software propio</span>
            <h2 className="section__title">Productos que he construido</h2>
            <p className="products__intro">
                No solo desarrollo por encargo: estos son sistemas completos, diseñados,
                construidos y operando en producción con usuarios reales.
            </p>

            <div className="products__container container grid">
                {products.map((product) => (
                    <article key={product.key} className={`products__card ${product.featured ? 'products__card-featured' : ''}`}>
                        <div className="products__img-wrapper">
                            <img
                                src={`assets/img/${product.img}`}
                                alt={`${product.name}: ${product.pitch}`}
                                className="products__img"
                                loading="lazy"
                                width="600"
                                height="400"
                            />
                            <span className="products__status">
                                <span className="products__status-dot"></span> {product.status}
                            </span>
                        </div>

                        <div className="products__content">
                            <h3 className="products__name">{product.name}</h3>
                            <p className="products__pitch">{product.pitch}</p>

                            <ul className="products__features">
                                {product.features.map((feature) => (
                                    <li key={feature} className="products__feature">
                                        <i className='bx bx-check-circle' aria-hidden="true"></i>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="products__footer">
                                <div className="products__tags">
                                    {product.tags.map((tag) => (
                                        <span key={tag} className="products__tag">{tag}</span>
                                    ))}
                                </div>
                                {product.url && (
                                    <a
                                        href={product.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="products__link"
                                        aria-label={`Visitar ${product.name}`}
                                    >
                                        Ver en vivo <i className='bx bx-link-external' aria-hidden="true"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="products__cta-wrapper">
                <p className="products__cta-text">¿Quieres un sistema así funcionando en tu negocio?</p>
                <a href="#contact" className="button">Hablemos de tu idea</a>
            </div>
        </section>
    )
}
