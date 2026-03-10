import { useTranslation } from "react-i18next";
import useMobile from "../../../hooks/useMobile";
import Animator from "../../../components/Animator/Animator";
import './BannerServicesView.scss';

import { BtnLined } from "../../../components/BtnLined/BtnLined";
import { useScroll } from "../../../hooks/useScroll";

//import { "iconos" } from '../../../data/img/img-data';

export const BannerServicesView = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile();
    useScroll("section-banner-services-view");

    return(
        <section className="section-banner-services-view" id="section-banner-projects-view">
            <div className="section-banner-services-view-div">

            </div>
        </section>
    )
}