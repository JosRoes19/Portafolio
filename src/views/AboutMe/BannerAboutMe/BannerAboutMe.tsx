import { useTranslation } from "react-i18next";
import useMobile from "../../../hooks/useMobile"; 
import Animator from "../../../components/Animator/Animator";
import './BannerAboutMe.scss';

import { useScroll } from "../../../hooks/useScroll";

//import { "iconos" } from '../../../data/img/img-data';

export const BannerAboutMe = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile();
    useScroll("section-banner-aboutme");
    
    return(
        <section className="section-banner-aboutme" id="section-banner-aboutme">
            <div className="section-banner-aboutme-div">

            </div>
        </section>
    )
}