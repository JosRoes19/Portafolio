import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import './footer.scss';
import useMobile from "../../hooks/useMobile";
import Animator from "../Animator/Animator";
import { linkedin, gitHubLogo, terminal_logo } from '../../data/img/img-data';

export const Footer = () => {
    const location = useLocation();
    const { t } = useTranslation();
    const { isMobile } = useMobile();

    const redirectToExternalLink = (href: string) => window.open(href, '_blank');

    // Si no estás en estas rutas, muestra el footer
    if (location.pathname.startsWith("/contact")) {
        return null;
    }

    return (
        <footer className="footer-component">
            <div className="footer-container">
                {/* Logo y derechos */}
                <Animator type={isMobile ? "fade" : "LeftHorizontal"} className="footer-left">
                    <div className="footer-logo">
                        <img className="footer-logo-text" src={terminal_logo.url} alt={terminal_logo.alt} />
                    </div>
                    <div className="footer-copyright">
                    </div>
                </Animator>

                <Animator type={isMobile ? "fade" : "RightHorizontal"} className="footer-right">
                    <div className="footer-social">
                        <a href="https://github.com/JosRoes19" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                            <img src={gitHubLogo.url} alt={gitHubLogo.alt} />
                        </a>
                        <a href="https://www.linkedin.com/in/josroes/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                            <img src={linkedin.url} alt={linkedin.alt} />
                        </a>
                    </div>
                </Animator>
            </div>

            <div className="footer-nav">
                <Animator type="fade" className="footer-nav-links">
                    <Link to='/' className="footer-nav-link">{t("menu.index")}</Link>
                    <span className="footer-nav-separator">|</span>
                    {/* <Link to='/projects' className="footer-nav-link">{t("menu.projects")}</Link>
                    <span className="footer-nav-separator">|</span> */}
                    <Link to='/aboutme' className="footer-nav-link">{t("menu.aboutme")}</Link>
                    <span className="footer-nav-separator">|</span>
                    <Link to='/resume' className="footer-nav-link">{t("menu.resume")}</Link>
                    <span className="footer-nav-separator">|</span>
                    <Link to='/contact' className="footer-nav-link">{t("menu.contact")}</Link>
                </Animator>
            </div>
        </footer>
    );
};