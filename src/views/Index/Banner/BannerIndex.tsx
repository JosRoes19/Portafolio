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
                        <video className="container-video" src={isMobile ? "/videos/loop_banner.mp4" : "/videos/loop_banner.mp4"} controls={false} autoPlay muted loop></video>
            <div className="container-banner">
                <Animator type="fade" duration={0.5}>
                    <BtnLined to='/contact' className='index-banner-button' text={t('index.BtnLined.btnBanner')} customColor='white' customIcon={arrow_right_white} />
                </Animator>
            </div>
        </section>
    );
};