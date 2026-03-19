import { useTranslation } from "react-i18next";
import useMobile from "../../hooks/useMobile";
import Animator from "../Animator/Animator";
import { useState } from "react";
import { BtnLined } from "../BtnLined/BtnLined";
import { arrow_right_white, check_white } from "../../data/img/img-data";
import "./FormContactComponent.scss";

// Definimos la interfaz para los datos del formulario
interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    budget: string;
    message: string;
}

// Definimos la interfaz para los errores
interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    budget?: string;
    message?: string;
}

export const FormContactComponent = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        budget: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (): FormErrors => {
        const newErrors: FormErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = t('form.errors.nameRequired') || 'El nombre es requerido';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = t('form.errors.emailRequired') || 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('form.errors.emailInvalid') || 'Email no válido';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = t('form.errors.messageRequired') || 'El mensaje es requerido';
        }
        
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Limpiar error del campo cuando el usuario escribe
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const newErrors = validateForm();
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        
        setIsSubmitting(true);
        
        // Aquí implementarías la lógica para enviar el formulario
        try {
            // Simulación de envío
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Form submitted:', formData);
            setIsSuccess(true);
            
            // Resetear formulario
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                budget: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="form-contact" id="contact">
            <video className="form-contact-video" src={isMobile ? "/videos/loop_banner.mp4" : "/videos/loop_banner.mp4"} autoPlay muted loop playsInline></video>
            
            {/* Overlay oscuro para mejorar legibilidad */}
            <div className="form-contact-overlay"></div>

            {/* Contenido del formulario */}
            <div className="form-contact-content">
                <Animator type="fade" duration={0.5}>
                    <div className="form-contact-header">
                        <h2>{t('form.title') || "Construyamos nuevos proyectos juntos"}</h2>
                        <p>{t('form.subtitle') || "¿Tienes un proyecto en mente? Cuéntame sobre él y te responderé a la mayor brevedad."}</p>
                    </div>
                </Animator>

                <div className="form-contact-container">
                    {!isSuccess ? (
                        <Animator type="fade" delay={0.2} duration={0.5}>
                            <div className="form-contact-card">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-contact-grid">
                                        {/* Nombre */}
                                        <div className="form-contact-field">
                                            <label htmlFor="name">{t('form.name') || "Nombre completo"} *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder={t('form.namePlaceholder') || "Juan Pérez"}
                                                disabled={isSubmitting}
                                                className={errors.name ? 'error' : ''}
                                            />
                                            {errors.name && <span className="form-contact-error">{errors.name}</span>}
                                        </div>

                                        {/* Email */}
                                        <div className="form-contact-field">
                                            <label htmlFor="email">{t('form.email') || "Email"} *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder={t('form.emailPlaceholder') || "juan@ejemplo.com"}
                                                disabled={isSubmitting}
                                                className={errors.email ? 'error' : ''}
                                            />
                                            {errors.email && <span className="form-contact-error">{errors.email}</span>}
                                        </div>

                                        {/* Teléfono */}
                                        <div className="form-contact-field">
                                            <label htmlFor="phone">{t('form.phone') || "Teléfono"}</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder={t('form.phonePlaceholder') || "+34 123 456 789"}
                                                disabled={isSubmitting}
                                            />
                                        </div>

                                        {/* Empresa */}
                                        <div className="form-contact-field">
                                            <label htmlFor="company">{t('form.company') || "Empresa / Organización"}</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder={t('form.companyPlaceholder') || "Nombre de tu empresa"}
                                                disabled={isSubmitting}
                                            />
                                        </div>

                                        {/* Presupuesto */}
                                        <div className="form-contact-field full-width">
                                            <label htmlFor="budget">{t('form.budget') || "Presupuesto aproximado"}</label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                disabled={isSubmitting}
                                            >
                                                <option value="">{t('form.budgetPlaceholder') || "Selecciona un rango"}</option>
                                                <option value="<5000">&lt; 5.000€</option>
                                                <option value="5000-15000">5.000€ - 15.000€</option>
                                                <option value="15000-30000">15.000€ - 30.000€</option>
                                                <option value=">30000">&gt; 30.000€</option>
                                            </select>
                                        </div>

                                        {/* Mensaje */}
                                        <div className="form-contact-field full-width">
                                            <label htmlFor="message">{t('form.message') || "Mensaje"} *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder={t('form.messagePlaceholder') || "Cuéntame sobre tu proyecto..."}
                                                disabled={isSubmitting}
                                                rows={5}
                                                className={errors.message ? 'error' : ''}
                                            />
                                            {errors.message && <span className="form-contact-error">{errors.message}</span>}
                                        </div>
                                    </div>

                                    <div className="form-contact-button">
                                        <BtnLined
                                            type="submit"
                                            text={isSubmitting ? (t('form.sending') || "Enviando...") : (t('form.submit') || "Enviar mensaje")}
                                            customColor="white"
                                            customIcon={arrow_right_white}
                                            disabled={isSubmitting}
                                            className="form-contact-submit-btn"
                                        />
                                    </div>
                                </form>
                            </div>
                        </Animator>
                    ) : (
                        <Animator type="fade" duration={0.5}>
                            <div className="form-contact-card form-contact-success-card">
                                <img src={check_white.url} alt={check_white.alt} className="form-contact-success-icon" />
                                <h3>{t('form.successTitle') || "¡Mensaje enviado!"}</h3>
                                <p>{t('form.successMessage') || "Gracias por contactarme. Te responderé a la mayor brevedad posible."}</p>
                                <BtnLined to="/" text={t('form.backHome') || "Volver al inicio"} customColor="white" customIcon={arrow_right_white} className="form-contact-back-btn"
                                />
                            </div>
                        </Animator>
                    )}
                </div>
            </div>
        </section>
    );
};