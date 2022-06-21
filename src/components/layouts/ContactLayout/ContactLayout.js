import './ContactLayout.css'
import emailjs from 'emailjs-com';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function ContactLayout(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [project, setProject] = useState("");
    const notify = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ifrojas27', 'template_9fgiykm', e.target, 'aATkyG87zBArxHHlp')
        .then((result) => {
            toast('Recibí la información, te contactaré pronto!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                type:'success',
                progress: undefined,
                });
        }, (error) => {
            toast('Algo anda mal, contactame por otro medio', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                type:'error',
                progress: undefined,
                });
        });
        setName('')
        setEmail('')
        setProject('')
        
    }
    return (
        <section className="contact section" id="contact">
                <span className="section__subtitle">Ponerse en contacto</span>
                <h2 className="section__title">Contactame</h2>

                <div className="contact__container container grid">
                    <div className="contact__content">
                        <h3 className="contact_title">Comunicate conmigo</h3>

                        <div className="contact__info">
                            <div className="contact__card">
                                <i className='bx bx-mail-send contact__card-icon' ></i>
                                <h3 className="contact__card-title">Email</h3>
                                <span className="contact__card-data">ivanfrojas27@gmail.com</span>
                                <a href="mailto:ivanfrojas27@gmail.com" target="_blank" className="contact__button" rel="noreferrer">
                                    Escribeme <i className='bx bx-right-arrow-alt contact__button-icon' ></i>
                                </a>
                            </div>

                            <div className="contact__card">
                                <i className='bx bxl-whatsapp contact__card-icon' ></i>
                                <h3 className="contact__card-title">Whatsapp</h3>
                                <span className="contact__card-data">+57 3229140284</span>
                                <a href="https://api.whatsapp.com/send?phone=573229140284&text=Hello, more information!" target="_blank" className="contact__button" rel="noreferrer">
                                    Escribeme <i className='bx bx-right-arrow-alt contact__button-icon' ></i>
                                </a>
                            </div>

                            <div className="contact__card">
                                <i className='bx bxl-messenger contact__card-icon' ></i>
                                <h3 className="contact__card-title">Messenger</h3>
                                <span className="contact__card-data">ifrojas</span>
                                <a href="https://m.me/ifrojas" target="_blank" className="contact__button" rel="noreferrer">
                                    Escribeme <i className='bx bx-right-arrow-alt contact__button-icon' ></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact__content">
                        <h3 className="contact__title">Escribeme sobre tu proyecto</h3>
                        <form action="" autoComplete="off" id="form_contact" className="contact__form" onSubmit={notify}>
                            <div className="contact__form-div">
                                <label htmlFor="" className="contact__form-tag">Nombres</label>
                                <input name="from_name" id="from_name" type="text" placeholder="Ingresa tu nombre" className="contact__form-input" value={name} required onChange={e => setName(e.target.value)}/>                                
                            </div>

                            <div className="contact__form-div">
                                <label htmlFor="" className="contact__form-tag">Email</label>
                                <input name="from_email" id="from_email" type="email" placeholder="Ingresa tu Email" className="contact__form-input"  value={email} onChange={e => setEmail(e.target.value)}/>                                
                            </div>

                            <div className="contact__form-div contact__form-area">
                                <label htmlFor="" className="contact__form-tag">Proyecto</label>
                                <textarea name="from_message_contact" id="from_message_contact" cols="30" rows="10" placeholder="Escribe sobre tu proyecto" className="contact__form-input" required value={project} onChange={e => setProject(e.target.value)}></textarea>                                
                            </div>

                            <button type='submit' className="button">Enviar Mensaje</button>
                            <ToastContainer/>
                        </form>
                    </div>
                </div>
            </section>
    )
}