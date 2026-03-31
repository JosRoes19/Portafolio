import { useTranslation } from "react-i18next";
import useMobile from "../../../hooks/useMobile";
import { useState } from "react";
import { BtnLined } from "../../../components/BtnLined/BtnLined";
import { arrow_right_white, check_white, flag_mx } from "../../../data/img/img-data";
import "./FormContact.scss";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}

const FormContact = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (): FormErrors => {
        const newErrors: FormErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = t('contact.form.placeholder.error.nameRequired');
        }
        
        if (!formData.email.trim()) {
            newErrors.email = t('contact.form.placeholder.error.emailRequired');
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('contact.form.placeholder.error.emailInvalid');
        }
        
        if (!formData.message.trim()) {
            newErrors.message = t('contact.form.placeholder.error.messageRequired') || 'El mensaje es requerido';
        }
        
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
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
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Form submitted:', formData);
            setIsSuccess(true);
            
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="form-contact-container">
            {!isSuccess ? (
                <div className="form-contact-card">
                    <form onSubmit={handleSubmit}>
                        <div className="form-contact-grid">
                            {/* Nombre */}
                            <div className="form-contact-field">
                                <label htmlFor="name">{t('contact.form.name')} *</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder={t('contact.form.placeholder.name')} disabled={isSubmitting} className={errors.name ? 'error' : ''} />
                                    {errors.name && <span className="form-contact-error">{errors.name}</span>}
                            </div>

                            {/* Email */}
                            <div className="form-contact-field">
                                <label htmlFor="email">{t('contact.form.email')} *</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('contact.form.placeholder.email')} disabled={isSubmitting} className={errors.email ? 'error' : ''} />
                                    {errors.email && <span className="form-contact-error">{errors.email}</span>}
                            </div>

                            {/* Teléfono */}
                            <div className="form-contact-field">
                                <label htmlFor="phone">{t('contact.form.phone') || "Teléfono"}</label>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder={t('contact.form.placeholder.phone')} disabled={isSubmitting} />
                            </div>

                            {/* Mensaje */}
                            <div className="form-contact-field full-width">
                                <label htmlFor="message">{t('contact.form.message') || "Mensaje"} *</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder={t('contact.form.placeholder.message')} disabled={isSubmitting} rows={5} className={errors.message ? 'error' : ''} />
                                    {errors.message && <span className="form-contact-error">{errors.message}</span>}
                            </div>
                        </div>

                        <div className="form-contact-button">
                            <BtnLined type="submit" text={isSubmitting ? (t('contact.form.sending')) : (t('contact.form.submit'))} customColor="#9AF5FE" customIcon={arrow_right_white} disabled={isSubmitting} loading={isSubmitting} className="form-contact-submit-btn"
                            />
                        </div>
                    </form>
                </div>
            ) : (
                <div className="form-contact-card form-contact-success-card">
                    <img src={check_white.url} alt={check_white.alt} className="form-contact-success-icon" />
                    <h3>{t('contact.form.successTitle')}</h3>
                    <p>{t('contact.form.successMessage')}</p>
                    <BtnLined to="/" text={t('contact.form.backHome')} customColor="#9AF5FE" customIcon={arrow_right_white} className="form-contact-back-btn" />
                </div>
            )}
        </div>
    );
};

export default FormContact;