import SwiperTestimonial from './SwiperTestimonial'
import './TestimonialLayout.css'
export default function TestimonialLayout(){
    SwiperTestimonial()
    return (
        <section className="testimonial section" id="testimonial">
                <span className="section__subtitle">Comentarios de mis clientes</span>
                <h2 className="section__title">Testimonios</h2>

                <div className="testimonial__container container swiper">
                    <div className="swiper-wrapper">
                        <div className="testimonial__card swiper-slide">
                            <img src="assets/img/testimonial1.png" alt="" className="testimonial__img"/>

                            <h3 className="testimonial__name">Armando Rojas</h3>
                            <p className="testimonial__description">
                                A really good job, all aspects of the project were
                                followed step by step and with good results.
                            </p>
                        </div>

                        <div className="testimonial__card swiper-slide">
                            <img src="assets/img/testimonial2.png" alt="" className="testimonial__img"/>

                            <h3 className="testimonial__name">Lilian Rojas</h3>
                            <p className="testimonial__description">
                                A really good job, all aspects of the project were
                                followed step by step and with good results.
                            </p>
                        </div>

                        <div className="testimonial__card swiper-slide">
                            <img src="assets/img/testimonial3.png" alt="" className="testimonial__img"/>

                            <h3 className="testimonial__name">Maria Caicedo</h3>
                            <p className="testimonial__description">
                                A really good job, all aspects of the project were
                                followed step by step and with good results.
                            </p>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
    )
}