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
                <BtnLined to='/contact' className='index-banner-button' text={t('index.BtnLined.btnBanner')} customColor='white' customIcon={arrow_right_white} />
                </Animator>
            </div>
        </section>
    );
};