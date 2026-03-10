import { useTranslation } from "react-i18next";
import useMobile from "../../../hooks/useMobile";
import Animator from "../../../components/Animator/Animator";
import './banner-index.scss';
//se importan componentes
import { BtnLined } from "../../../components/BtnLined/BtnLined";
import { useScroll } from "../../../hooks/useScroll";
//importacion de materiales, "iconos o componentes"
//import { icono_a_usar } from '../../../data/img/img-data';

export const BannerIndex = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile();
    useScroll("section-banner-index");
    const { scrollTo } = useScroll("component-floating-cards-banner", false);

    return(
        <section className="section-banner-index" id="section-banner-index">
                        <video className="container-video" src={isMobile ? "/videos/loop_banner.mp4" : "/videos/loop_banner.mp4"} controls={false} autoPlay muted loop></video>
            <div className="container-banner">
                <Animator type="fade" duration={0.5}>
                    {/* <img className="container-img-logo" src={icon_logo.url} alt={icon_logo.alt}/> */}
                    <p>Aqui va una imagen xd</p>
                </Animator>
                {/* <Animator type="fade" duration={0.5}>
                    <BtnLined onClick={scrollTo} text={t('global.button_up')}/>
                </Animator> */}
            </div>
        </section>
    )
}