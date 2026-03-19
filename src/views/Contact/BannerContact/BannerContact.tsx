import { useTranslation } from "react-i18next";
import useMobile from "../../../hooks/useMobile";
import Animator from "../../../components/Animator/Animator";
import FormContact from "../FormContact/FormContact";
import "./BannerContact.scss";

const BannerContact = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile();

    return (
        <section className="banner-contact" id="banner-contact">
            <video className="banner-contact-video" src={isMobile ? "/videos/loop_banner.mp4" : "/videos/loop_banner.mp4"} autoPlay muted loop playsInline/>
            <div className="banner-contact-overlay" />

            <div className="banner-contact-content">
                <Animator type="fade" duration={0.5}>
                    <div className="banner-contact-header">
                        <h1>{t('contact.banner.title')}</h1>
                        <p>{t('contact.banner.subtitle')}</p>
                    </div>
                </Animator>

                <Animator type="fade" delay={0.2} duration={0.5}>
                    <FormContact />
                </Animator>
            </div>
        </section>
    );
};

export default BannerContact;