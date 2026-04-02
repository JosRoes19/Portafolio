import { useTranslation } from "react-i18next";
import useMobile from "../../../hooks/useMobile";
import Animator from "../../../components/Animator/Animator";
import { BtnLined } from "../../../components/BtnLined/BtnLined";
import { CardsLined } from "../../../components/CardsLined/CardLined";
import { arrow_right_white, gitHubLogo } from '../../../data/img/img-data';
import { useProjects } from "../../../hooks/hookProjects/useProjects";
import './BannerProjectsView.scss';
import { useScroll } from "../../../hooks/useScroll";

export const BannerProjectsView = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile();
    const { projects, loading, error } = useProjects();
    useScroll("section-banner-projects-view");

    // Función para obtener el icono de la tecnología (puedes expandir esto)
    const getTechIcon = (tech: string) => {
        // Aquí puedes mapear tecnologías a sus iconos
        // Por ahora retornamos null para que CardsLined muestre solo el texto
        return null;
    };

    if (loading) {
        return (
            <section className="section-banner-projects-view" id="section-banner-projects-view">
                <div className="projects-container">
                    <div className="projects-loading">
                        <div className="loader"></div>
                        <p>{t('projects.loading')}</p>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="section-banner-projects-view" id="section-banner-projects-view">
                <div className="projects-container">
                    <div className="projects-error">
                        <p>{error}</p>
                    </div>
                </div>
            </section>
        );
    }

    if (projects.length === 0) {
        return (
            <section className="section-banner-projects-view" id="section-banner-projects-view">
                <div className="projects-container">
                    <div className="projects-empty">
                        <p>{t('projects.empty')}</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="section-banner-projects-view" id="section-banner-projects-view">
            <div className="projects-container">
                <Animator type="fade" duration={0.5}>
                    <div className="projects-header">
                        <h1 className="projects-title">{t('projects.banner.title')}</h1>
                        <p className="projects-subtitle">{t('projects.banner.subtitle')}</p>
                    </div>
                </Animator>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <Animator 
                            key={project.id} 
                            type="fade" 
                            duration={0.5} 
                            delay={0.1 * (index % 3)}
                        >
                            <div className="project-card">
                                {project.image_url && (
                                    <div className="project-card-image">
                                        <img src={project.image_url} alt={project.title} />
                                    </div>
                                )}
                                <div className="project-card-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    
                                    <div className="project-technologies">
                                        {project.technologies.map((tech, techIndex) => (
                                            <CardsLined key={techIndex} name={tech} icon={getTechIcon(tech)} className="tech-card"/>
                                        ))}
                                    </div>

                                    <div className="project-actions">
                                        {project.demo_url && (
                                            <BtnLined to={project.demo_url} text={t('projects.buttons.viewDemo')} customColor="#9AF5FE" customIcon={arrow_right_white} className="project-demo-btn"/>
                                        )}
                                        {project.github_url && (
                                            <BtnLined to={project.github_url} text={t('projects.buttons.github')} customColor="white" customIcon={gitHubLogo} className="project-github-btn"/>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Animator>
                    ))}
                </div>
            </div>
        </section>
    );
};