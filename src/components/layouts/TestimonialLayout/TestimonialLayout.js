import SwiperTestimonial from './SwiperTestimonial'
import './TestimonialLayout.css'
import TestimoniosData from '../../../Data/testimonios.json'
export default function TestimonialLayout(){
    SwiperTestimonial()
    return (
        <section className="testimonial section" id="testimonial">
                <span className="section__subtitle">Comentarios de mis clientes</span>
                <h2 className="section__title">Testimonios</h2>

                <div className="testimonial__container container swiper">
                    <div className="swiper-wrapper">

                        {TestimoniosData.map((item)=>(
                            <div className="testimonial__card swiper-slide">
                                <img src={item.img} alt="" className="testimonial__img"/>

                                <h3 className="testimonial__name">{item.name}</h3>
                                <p className="testimonial__description">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
    )
}
