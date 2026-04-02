import { useTranslation } from "react-i18next";
import useMobile from "../../../hooks/useMobile";
import Animator from "../../../components/Animator/Animator";
import { BtnLined } from "../../../components/BtnLined/BtnLined";
import { arrow_right_white, ReactLogo, AngularLogo, LaravelLogo, NodeJsLogo, MySql, linkedin_withe, location_icon, email_icon, gitHubLogo, download_icon } from '../../../data/img/img-data';
import './BannerResumeView.scss';

export const BannerResumeView = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile();

    // Obtener datos de traducción
    const skills = t('resume.skills.list', { returnObjects: true }) as Array<{ name: string; level: number }>;
    const techStackNames = t('resume.techStack.list', { returnObjects: true }) as string[];
    const languages = t('resume.languages.list', { returnObjects: true }) as Array<{ name: string; level: string }>;
    const experiences = t('resume.experience.items', { returnObjects: true }) as Array<{
        title: string;
        company: string;
        period: string;
        description: string[];
    }>;
    const education = t('resume.education.items', { returnObjects: true }) as Array<{
        degree: string;
        institution: string;
        period: string;
    }>;

    // Mapeo de iconos para tech stack
    const techStackIcons: { [key: string]: any } = {
        "React": ReactLogo,
        "Angular": AngularLogo,
        "Laravel": LaravelLogo,
        "Node.js": NodeJsLogo,
        "MySQL": MySql,
    };

    const techStack = techStackNames.map(name => ({
        name,
        icon: techStackIcons[name] || ReactLogo
    }));

    const handleEmailClick = () => {
        window.location.href = "mailto:josroes.19@gmail.com";
    };

    const handleGitHubClick = () => {
        window.open("https://github.com/josroes19", "_blank", "noopener,noreferrer");
    };

    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/josroes/", "_blank", "noopener,noreferrer");
    };

    const handleDownloadCV = () => {
        // Ruta a tu archivo CV (ajusta la ruta según tu estructura)
        const cvUrl = "../../../public/files/CVJoseLuisRE.pdf";
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = "CVJoseLuisRE.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="section-banner-resume-view" id="section-banner-resume-view">
            <div className="resume-container">
                {/* Header con información personal */}
                <Animator type="fade" duration={0.5}>
                    <div className="resume-header">
                        <div className="resume-header-top">
                            <div className="resume-title-wrapper">
                                <h1 className="resume-name">{t('resume.name')}</h1>
                                <h2 className="resume-title">{t('resume.title')}</h2>
                            </div>
                            <button className="download-cv-btn" onClick={handleDownloadCV}>
                                <img src={download_icon.url} alt={download_icon.alt} className="download-icon" />
                                <span>{t('resume.downloadCV.downloadCV')}</span>
                            </button>
                        </div>
                        <div className="resume-contact">
                            <div className="contact-item" onClick={handleEmailClick}>
                                <img src={email_icon.url} alt="email" className="contact-icon" />
                                <span>{t('resume.contact.email')}</span>
                            </div>
                            <div className="contact-item" onClick={handleGitHubClick}>
                                <img src={gitHubLogo.url} alt="gitHub" className="contact-icon" />
                                <span>{t('resume.contact.gitHub')}</span>
                            </div>
                            <div className="contact-item">
                                <img src={location_icon.url} alt="location" className="contact-icon" />
                                <span>{t('resume.contact.location')}</span>
                            </div>
                            <div className="contact-item" onClick={handleLinkedInClick}>
                                <img src={linkedin_withe.url} alt="linkedin" className="contact-icon" />
                                <span>{t('resume.contact.linkedin')}</span>
                            </div>
                        </div>
                    </div>
                </Animator>

                {/* Resto del código igual... */}
                <div className="resume-grid">
                    {/* Columna Izquierda */}
                    <div className="resume-left">
                        {/* Sobre Mí */}
                        <Animator type="LeftHorizontal" duration={0.5} delay={0.1}>
                            <div className="resume-section">
                                <h3 className="section-title">{t('resume.profile.title')}</h3>
                                <p className="section-text">{t('resume.profile.description')}</p>
                            </div>
                        </Animator>

                        {/* Habilidades Técnicas */}
                        <Animator type="LeftHorizontal" duration={0.5} delay={0.2}>
                            <div className="resume-section">
                                <h3 className="section-title">{t('resume.skills.title')}</h3>
                                <div className="skills-grid">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="skill-item">
                                            <span className="skill-name">{skill.name}</span>
                                            <div className="skill-bar">
                                                <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Animator>

                        {/* Tech Stack */}
                        <Animator type="LeftHorizontal" duration={0.5} delay={0.3}>
                            <div className="resume-section">
                                <h3 className="section-title">{t('resume.techStack.title')}</h3>
                                <div className="tech-stack-grid">
                                    {techStack.map((tech, index) => (
                                        <div key={index} className="tech-badge">
                                            <img src={tech.icon.url} alt={tech.name} className="tech-badge-icon" />
                                            <span>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Animator>

                        {/* Idiomas */}
                        <Animator type="LeftHorizontal" duration={0.5} delay={0.4}>
                            <div className="resume-section">
                                <h3 className="section-title">{t('resume.languages.title')}</h3>
                                {languages.map((lang, index) => (
                                    <div key={index} className="language-item">
                                        <span className="language-name">{lang.name}</span>
                                        <span className="language-level">{lang.level}</span>
                                    </div>
                                ))}
                            </div>
                        </Animator>
                    </div>

                    {/* Columna Derecha */}
                    <div className="resume-right">
                        {/* Experiencia Laboral */}
                        <Animator type="RightHorizontal" duration={0.5} delay={0.1}>
                            <div className="resume-section">
                                <h3 className="section-title">{t('resume.experience.title')}</h3>
                                {experiences.map((exp, index) => (
                                    <div key={index} className="experience-item">
                                        <div className="experience-header">
                                            <h4 className="experience-title">{exp.title}</h4>
                                            <span className="experience-company">{exp.company}</span>
                                            <span className="experience-period">{exp.period}</span>
                                        </div>
                                        <ul className="experience-description">
                                            {exp.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </Animator>

                        {/* Educación */}
                        <Animator type="RightHorizontal" duration={0.5} delay={0.2}>
                            <div className="resume-section">
                                <h3 className="section-title">{t('resume.education.title')}</h3>
                                {education.map((edu, index) => (
                                    <div key={index} className="education-item">
                                        <h4 className="education-degree">{edu.degree}</h4>
                                        <span className="education-institution">{edu.institution}</span>
                                        <span className="education-period">{edu.period}</span>
                                    </div>
                                ))}
                            </div>
                        </Animator>

                        {/* CTA */}
                        <Animator type="fade" duration={0.5} delay={0.3}>
                            <div className="resume-cta">
                                <BtnLined 
                                    to="/contact" 
                                    text={t('resume.cta.text')} 
                                    customColor="#9AF5FE" 
                                    customIcon={arrow_right_white} 
                                    className="resume-button"
                                />
                            </div>
                        </Animator>
                    </div>
                </div>
            </div>
        </section>
    );
};