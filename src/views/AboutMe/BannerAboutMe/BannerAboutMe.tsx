import { useTranslation } from "react-i18next";
import useMobile from "../../../hooks/useMobile";
import Animator from "../../../components/Animator/Animator";
import { BtnLined } from "../../../components/BtnLined/BtnLined";
import { CardsLined } from "../../../components/CardsLined/CardLined";
import { arrow_right_white, ReactLogo, NodeJsLogo, MySql, AngularLogo, Me_photo } from "../../../data/img/img-data";
import './BannerAboutMe.scss';
import { useScroll } from "../../../hooks/useScroll";

export const BannerAboutMe = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile();
    useScroll("section-banner-aboutme");

    const mainTechStack = [
        { name: "React", icon: ReactLogo },
        { name: "Angular", icon: AngularLogo },
        { name: "Node.js", icon: NodeJsLogo },
        { name: "MySQL", icon: MySql }
    ];

    return (
        <section className="section-banner-aboutme" id="section-banner-aboutme">
            <div className="banner-aboutme-container">
                {/* Sección Principal con foto a la izquierda */}
                <div className="banner-aboutme-grid">
                    {/* Columna izquierda - Foto con card superpuesta */}
                    <Animator type="LeftHorizontal" duration={0.5} className="banner-aboutme-photo-wrapper">
                        <div className="photo-container">
                            <img src={Me_photo.url} alt={Me_photo.alt} className="profile-photo" />
                            <div className="photo-overlay"></div>
                            
                            {/* Card superpuesta encima de la foto */}
                            <div className="experience-card-overlay">
                                <div className="experience-card-content">
                                    <span className="experience-number">{t('about.banner.years')}</span>
                                    <span className="experience-label">{t('about.banner.yearsLabel')}</span>
                                </div>
                            </div>
                        </div>
                    </Animator>

                    <Animator type="RightHorizontal" duration={0.5} delay={0.2} className="banner-aboutme-content">
                        <span className="banner-aboutme-subtitle">{t('about.banner.subtitle')}</span>
                        <h1 className="banner-aboutme-title">{t('about.banner.title')}</h1>
                        <p className="banner-aboutme-description">
                            {t('about.banner.description1')}
                        </p>
                        <p className="banner-aboutme-description">
                            {t('about.banner.description2')}
                        </p>
                        
                        <div className="banner-aboutme-quote">
                            <span className="quote-mark">“</span>
                            <span className="quote-text">{t('about.banner.quote')}</span>
                            <span className="quote-mark">”</span>
                        </div>
                    </Animator>
                </div>

                <Animator type="fade" duration={0.5} delay={0.3}>
                    <div className="tech-stack-section">
                        <h2 className="section-title">{t('about.techStack.title')}</h2>
                        <p className="section-description">
                            {t('about.techStack.description')}
                        </p>
                        
                        <div className="tech-stack-grid">
                            {mainTechStack.map((tech, index) => (
                                <CardsLined key={index} name={tech.name} icon={tech.icon} />
                            ))}
                        </div>
                    </div>
                </Animator>

                <Animator type="fade" duration={0.5} delay={0.4}>
                    <div className="cta-section">
                        <BtnLined to="/contact" text={t('about.cta.ready')} customColor="#9AF5FE" customIcon={arrow_right_white} className="cta-button"/>
                    </div>
                </Animator>
            </div>
        </section>
    );
};