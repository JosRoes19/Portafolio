import { useTranslation } from "react-i18next";
import useMobile from "../../../hooks/useMobile";
import Animator from "../../../components/Animator/Animator";
import FormContact from "../FormContact/FormContact";
import { CardsLined } from "../../../components/CardsLined/CardLined"
import "./BannerContact.scss";
import { gitHubLogo, linkedin } from "../../../data/img/img-data";
import { redirect } from "react-router-dom";

const BannerContact = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile();

    const plataforms = [
        {name: "Linkedin", icon: linkedin, user: "@Josroes", redirect: "https://www.linkedin.com/in/josroes/"},
        {name: "GitHub", icon: gitHubLogo, user: "JosRoes19", redirect: "https://github.com/JosRoes19/Portafolio"}
    ];

    return (
        <section className="banner-contact" id="banner-contact">
            <video className="banner-contact-video" src={isMobile ? "https://res.cloudinary.com/dvht7854s/video/upload/v1773986563/loop_banner_hrn0go.mp4" : "https://res.cloudinary.com/dvht7854s/video/upload/v1773986563/loop_banner_hrn0go.mp4"} autoPlay muted loop playsInline/>
            <div className="banner-contact-overlay" />

            <div className="banner-contact-content">
                <div className="banner-contact-grid">
                    <Animator type="LeftHorizontal" duration={0.5} className="banner-contact-left">
                        <div className="banner-contact-header">
                            <p>{t('contact.banner.p')}</p>
                            <h1>{t('contact.banner.title')}</h1>
                            <h2>{t('contact.banner.subtitle')}</h2>
                            <p>{t('contact.banner.p2')}</p>
                            <p>{t('contact.banner.p3')}</p>
                        </div>
                        <div className="tech-cards-horizontal ">
                            {plataforms.map((plat, index) => (
                                <CardsLined key={index} name={plat.name} icon={plat.icon} user={plat.user} redirect={plat.redirect}/>
                            ))}
                        </div>
                    </Animator>

                    <Animator type="RightHorizontal" duration={0.5} delay={0.2} className="banner-contact-right">
                        <FormContact />
                    </Animator>
                </div>
            </div>
        </section>
    );
};

export default BannerContact;