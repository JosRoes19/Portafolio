import { useTranslation } from "react-i18next";
import useMobile from "../../../hooks/useMobile";
import Animator from "../../../components/Animator/Animator";
import './banner-index.scss';
import { BtnLined } from "../../../components/BtnLined/BtnLined";
import { CardsLined } from "../../../components/CardsLined/CardLined";
import { arrow_right_white, ReactLogo, LaravelLogo, AngularLogo, NodeJsLogo } from "../../../data/img/img-data";

export const BannerIndex = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile();

    const technologies = [
        {name: "React", icon: ReactLogo},
        {name: "Angular", icon: LaravelLogo},
        {name: "Laravel", icon: AngularLogo},
        {name: "NodeJs", icon: NodeJsLogo}
    ]


    return (
        <section className="section-banner-index" id="section-banner-index">
            <video className="container-video" src={isMobile ? "https://res.cloudinary.com/dvht7854s/video/upload/v1773986563/loop_banner_hrn0go.mp4" : "https://res.cloudinary.com/dvht7854s/video/upload/v1773986563/loop_banner_hrn0go.mp4"} autoPlay muted loop playsInline />
            <div className="container-banner">
                <Animator type="LeftHorizontal" duration={0.5}>
                    <div className="container-banner-text">
                        <span className="container-banner-underscore">_____</span>
                        <h1 className="container-banner-title">
                            <span className="container-banner-title-line">
                                {t("index.banner.title")}
                            </span>
                            <span className="container-banner-title2-line">
                                {t("index.banner.title2")}
                            </span>
                        </h1>
                        {<h2 className="container-banner-subtitle">{t("index.banner.subtitle")}</h2>}
                    </div>
                </Animator>
                <Animator type="LeftHorizontal" duration={0.5} delay={0.2}>
                    <div className="container-banner-buttons">
                        <BtnLined to='/contact' className='index-banner-button-contact' text={t('index.BtnLined.btnBanner')} customColor='#9AF5FE' customIcon={arrow_right_white} />
                        <BtnLined to='/resume' className='index-banner-button-resume' text={t('index.BtnLined.btnBannerResume')} customColor='white' customIcon={arrow_right_white} />
                    </div>
                </Animator>

                <br />
                <Animator className="container-banner-decoration" type="LeftHorizontal">
                    <span className="container-banner-underscore">_________________________________________</span>
                    <Animator className="tech-cards-horizontal" type="LeftHorizontal">
                        {technologies.map((tech, index) => (
                            <CardsLined key={index} name={tech.name} icon={tech.icon} />
                        ))}
                    </Animator>
                </Animator>
            </div>
        </section>
    );
};