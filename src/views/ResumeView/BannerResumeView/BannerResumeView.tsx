//import { useTranslation } from "react-i18next";
//import useMobile from "../../../hooks/useMobile";
//import Animator from "../../../components/Animator/Animator";
import './BannerResumeView.scss';

//import { BtnLined } from "../../../components/BtnLined/BtnLined";
import { useScroll } from "../../../hooks/useScroll";

//import { "iconos" } from '../../../data/img/img-data';

export const BannerResumeView = () => {
    //const { t } = useTranslation();
    //const { isMobile } = useMobile();
    useScroll("section-banner-resume-view");

    return(
        <section className="section-banner-resume-view" id="section-banner-resume-view">
            <div className="section-banner-resume-view-div">

            </div>
        </section>
    )
}