import { useTranslation } from "react-i18next";
import useMobile from "../../../hooks/useMobile";
import Animator from "../../../components/Animator/Animator";
import './BannerProjectsView.scss';

import { useScroll } from "../../../hooks/useScroll";

//import { "iconos" } from '../../../data/img/img-data';

export const BannerProjectsView = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile();
    useScroll("section-banner-projects-view");

    return(
        <section className="section-banner-projects-view" id="section-banner-projects-view">
            <div className="section-banner-projects-view-div">

            </div>
        </section>
    )
}