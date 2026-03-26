import { useTranslation } from "react-i18next";
import useMobile from "../../../hooks/useMobile";
import Animator from "../../../components/Animator/Animator";
import './banner-index.scss';
import { BtnLined } from "../../../components/BtnLined/BtnLined";
import { arrow_right_white } from "../../../data/img/img-data";

export const BannerIndex = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile();


    return (
        <section className="section-banner-index" id="section-banner-index">
            <video className="container-video" src={isMobile ? "https://res.cloudinary.com/dvht7854s/video/upload/v1773986563/loop_banner_hrn0go.mp4" : "https://res.cloudinary.com/dvht7854s/video/upload/v1773986563/loop_banner_hrn0go.mp4"} autoPlay muted loop playsInline/>
            <div className="container-banner">
                <Animator type="fade" duration={0.5}>
                    <div className="container-banner-text">
                        <h1 className="container-banner-title">
                            <span className="container-banner-title-line">
                                {t("index.banner.title")}
                            </span>
                            <span className="container-banner-title2-line">
                                {t("index.banner.title2")}
                            </span>
                        </h1>
                        <h2 className="container-banner-subtitle">{t("index.banner.subtitle")}</h2>
                    </div>
                </Animator>
                <Animator type="fade" duration={0.5} delay={0.2}>
                    <BtnLined to='/contact' className='index-banner-button' text={t('index.BtnLined.btnBanner')} customColor='white' customIcon={arrow_right_white} />
                    <BtnLined to='/contact' className='index-banner-button' text={t('index.BtnLined.btnBannerResume')} customColor='white' customIcon={arrow_right_white} />
                </Animator>
            </div>
        </section>
    );
};