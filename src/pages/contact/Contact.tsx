import { useState } from "react";
import Header from "../../components/header/Header";
import emailjs from '@emailjs/browser';
import './Contact.css';
import NavigationButton from "../../components/NavigationButton";
import '../../components/NavigationSideButton.css'

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [buttonText, setButtonText] = useState("Enviar");

    function sendEmail(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setButtonText("Enviando...");

        emailjs.send(
            "service_vkzq4uu",
            "template_unf8nuw",
            {
                name: form.name,
                email: form.email,
                subject: form.subject,
                message: form.message
            }, 
            "RQfaX51KAbt56z80v"
        ).then(() => {
            alert("Mensagem enviada com sucesso!");
            setForm({ name: "", email: "", subject: "", message: "" });
        }).catch((err) => {
            alert("Erro ao enviar mensagem, tente novamente.");
            console.error("Erro EmailJS:", err);
        }).finally(() => {
            setTimeout(() => {
                setLoading(false);
                setButtonText("Enviar");
            }, 1000);
        });
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <main className="contact-page">
            <Header />
            <section className="contact-container">

                <NavigationButton 
                                        path="/projects" 
                                        name={<img src="../../../assets/pointing_right.svg" />} 
                                        className="nav-side-button nav-side-button--left"
                />

                <h1 className="contact__main-title">Entre em Contato</h1>

                <div className="contact__layout-grid">
                    <div className="contact__socials-section">
                        <h2 className="contact__subtitle">Minhas redes sociais:</h2>
                        <div className="contact__links-list">
                            <a href="https://www.linkedin.com/in/nicollas-souza-rodrigues/" className="contact__social-link" target="_blank" rel="noreferrer">
                                <i className="devicon-linkedin-plain colored"></i> Linkedin
                            </a>
                            <a href="https://github.com/nicollasszr" className="contact__social-link" target="_blank" rel="noreferrer">
                                <i className="devicon-github-original"></i> Github
                            </a>
                        </div>
                    </div>

                    <div className="contact__divider" aria-hidden="true"></div>

                    <div className="contact__form-section">
                        <h2 className="contact__subtitle">Mande um Email:</h2>
                        <form className="contact__form" onSubmit={sendEmail}>
                            <input 
                                className="contact__form-input"
                                type="text" 
                                name="name" 
                                placeholder="Nome" 
                                value={form.name} 
                                onChange={handleChange} 
                                required 
                            />
                            <input 
                                className="contact__form-input"
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                value={form.email} 
                                onChange={handleChange} 
                                required 
                            />
                            <input 
                                className="contact__form-input"
                                type="text" 
                                name="subject" 
                                placeholder="Assunto" 
                                value={form.subject} 
                                onChange={handleChange} 
                            />
                            <textarea 
                                className="contact__form-textarea"
                                name="message" 
                                placeholder="Mensagem" 
                                value={form.message} 
                                onChange={handleChange} 
                                required 
                            />
                            <button className="contact__form-submit" type="submit" disabled={loading}>
                                {buttonText}
                            </button>
                        </form>
                    </div>
                </div>

                <NavigationButton 
                                        path="/" 
                                        name={<img src="../../../assets/pointing_right.svg" />} 
                                        className="nav-side-button nav-side-button--right"
                />
            </section>
        </main>
    );
}