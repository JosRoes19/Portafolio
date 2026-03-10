import { useTranslation } from "react-i18next";
import { /* href, */ Link, useLocation } from "react-router-dom";
import './footer.scss'
import useMobile from "../../hooks/useMobile";
import Animator from "../Animator/Animator";
import {  } from '../../data/img/img-data'; //iconos o imagenes, tanto mobiles o web
//import { ContactForm } from '../../components/ContactForm/ContactForm';


export const Footer = () => {
    const location = useLocation();
    const { t } = useTranslation();
   /*  const redirectToExternalLink = (href: string) => window.open(href, '_blank'); */
    const  { isMobile }  = useMobile();

    return (
      <>
        {!location.pathname.startsWith("/contact") && !location.pathname.startsWith("/terms-conditions") && !location.pathname.startsWith("/privacy") } /* && {/*<ContactForm> */} */ 
        <footer className="footer-component">
            <header className='footer-component-header'> 
                <Animator type={isMobile ? "fade" : "LeftHorizontal"} className='footer-component-header-div1' parentFlex>
                    {/* <img src={""} alt={""} className='footer-component-header-div1-img1'/> */}
                    <p>Aqui va una imagen</p>
                </Animator>
                <Animator className='footer-component-header-div2' type={isMobile ? "LeftHorizontal" : "RightHorizontal"}>
                    <Link to='/' className='footer-component-header-div2-p'>{t("menu.index")}</Link>
                    <Link to='/projects' className='footer-component-header-div2-p'>{t("menu.projects")}</Link>
                    <Link to='/aboutme' className='footer-component-header-div2-p'>{t("menu.aboutme")}</Link>
                    <Link to='/services' className='footer-component-header-div2-p'>{t("menu.services")}</Link>
                    <Link to='/contact' className='footer-component-header-div2-p'>{t("menu.contact")}</Link>
                </Animator>
                {/* <Animator className='footer-component-header-div3' type={isMobile ? "LeftHorizontal" : "RightHorizontal"}>
                    <Link to='/terms-conditions'>{t("menu2.conditions")}</Link>
                    <Link to='/privacy'>{t("menu2.privacy")}</Link>
                </Animator> */}
                <Animator className='footer-component-header-div4' type={isMobile ? "fade" : "RightHorizontal"} >
                        {/* <img onClick={() => redirectToExternalLink("https://mx.linkedin.com/")} src={""} alt={""} className='footer-component-header-div4-img'/> */}
                        <p>Aqui van imagenes</p>
                </Animator>
            </header>
            <section className='footer-component-section'>
                {/* <Animator type={isMobile ? "fade" : "LeftHorizontal"} parentFlex>
                    <p>{t("footer.year")}</p>
                </Animator> */}
                <Animator type={isMobile ? "fade" : "RightHorizontal"}>
                    <a href="" target="_blank" rel="" className="">
                        {/* <img src="" alt=""/> */}
                    </a>
                </Animator>            
            </section>
        </footer>
      </>  
    );

}