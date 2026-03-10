//import { useTranslation } from "react-i18next";
//import useMobile from "../../../hooks/useMobile";
//import Animator from "../../../components/Animator/Animator";
import './FormContact.scss';

import { useScroll } from "../../../hooks/useScroll";


export const FormContact = () => {
    //const { t } = useTranslation();
    //const { isMobile } = useMobile();
    useScroll("section-form-contact");

    return(
        <>
            <section className="banner-contact" id="section-form-contact">

            </section>
        </>
    )
}