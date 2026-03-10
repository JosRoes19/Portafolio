import { useTranslation } from "react-i18next";
import useMobile from "../../../hooks/useMobile";
import Animator from "../../../components/Animator/Animator";
import './BannerContact.scss';

import { WhatsAppBtn } from "../../../components/WhatsAppBtn/whatsAppBtn";
import { useScroll } from "../../../hooks/useScroll";


export const BannerContact = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile();
    useScroll("section-banner-contact");

    return(
        <>
            <section className="banner-contact" id="section-banner-contact">

            </section>
        </>
    )
}