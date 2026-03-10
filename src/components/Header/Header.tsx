import { useTranslation } from "react-i18next";
import useMobile from "../../hooks/useMobile";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { flag_mx, flag_usa, arrow_down, terminal_logo, menu_mobil } from "../../data/img/img-data" //icons
import { useMenu } from './hooks/useMenu';
import { useChangeLang } from "./hooks/useChangeLang";
import "./header_styles.scss";
import Animator from "../Animator/Animator";

export const Header = () => {
    const navigate = useNavigate();
    const {t}  = useTranslation();
    const { isMobile } = useMobile();
    const { pathname } = useLocation();
    const { flag, changeLanguage } = useChangeLang();
    const { visibleClass, openMenu, closeMenu, go } = useMenu();
    const isSelected = (to: string) => pathname === to ? ' selected' : '';

    return (
        <header className='main-header-component'>
            {isMobile
            ? (
                <>
                    <section className='main-header-component-mobile'>
                        <Animator type='fade'>
                            <img className='main-header-component-mobile-logo' src={terminal_logo.url} alt={terminal_logo.alt} />
                        </Animator>
                        <div>
                            <div className='main-header-lang'>
                                <img className='main-header-component-mobile-avatar-img' src={flag.url} alt={flag.alt} />
                                <img className='main-header-component-mobile-avatar-arrow' src={arrow_down.url} alt={arrow_down.alt} />
                                <article className="main-header-component-mobile-avatar-dropdown">
                                    <p className='main-header-component-mobile-avatar-dropdown-lang' onClick={() => changeLanguage("es")}>
                                        <img src={flag_mx.url} alt={flag_mx.alt} />
                                        ES
                                    </p>
                                    <p className='main-header-component-mobile-avatar-dropdown-lang' onClick={() => changeLanguage("en")}>
                                        <img src={flag_usa.url} alt={flag_usa.alt} />
                                        EN
                                    </p>
                                </article>
                            </div>
                            <img onClick={openMenu} className='main-header-component-mobile-menu' src={menu_mobil.url} alt={menu_mobil.alt} />
                        </div>
                    </section>
                    <section className={'main-header-menu-component-mobile' + visibleClass}>
                        <header className='main-header-menu-component-mobile-header'>
                            <img className='main-header-logo' src={terminal_logo.url} alt={terminal_logo.alt} />
                            <span className='main-header-close' onClick={closeMenu}>{t("header.closeMenu")}</span>
                        </header>
                        <div className='main-header-menu-component-mobile-links'>
                            <Link to='/' className={'main-header-menu-component-mobile-link' + (isSelected("/") ? " selected" : "")} onClick={closeMenu}>{t('menu_header.index')}</Link>
                            <Link to='/projects' className={'main-header-menu-component-mobile-link' + (isSelected("/projects") ? " selected" : "")} onClick={closeMenu}>{t('menu_header.projects')}</Link>
                            <Link to='/aboutme' className={'main-header-menu-component-mobile-link' + (isSelected("/aboutme") ? " selected" : "")} onClick={closeMenu}>{t('menu_header.aboutme')}</Link>
                            <Link to='/services' className={'main-header-menu-component-mobile-link' + (isSelected("/services") ? " selected" : "")} onClick={closeMenu}>{t('menu_header.services')}</Link>
                            <Link to='/contact' className={'main-header-menu-component-mobile-link' + (isSelected("/contact") ? " selected" : "")} onClick={closeMenu}>{t('menu_header.contact')}</Link>
                        </div>
                        <hr />
                        <div className='header-menu-component-external'>
                            <img onClick={() => go("https://www.instagram.com/", true)} src={"footer_instagram.url"} alt={"footer_instagram.alt"} className='footer-component-header-div4-img2'/>
                            <img onClick={() => go("https://mx.linkedin.com/", true)} src={"footer_linkedin.url"} alt={"footer_facebook.alt"} className='footer-component-header-div4-img'/>
                        </div>
                    </section>
                </>
            ) : (
                //WEB
                <>
                    <section className='main-header-component-section2'>
                        <Animator type='LeftHorizontal'>
                            <img className='main-header-component-section2-logo' src={terminal_logo.url} alt={terminal_logo.alt} />
                        </Animator>
                        <div className='main-header-component-section2-div'>
                            <Link to='/' className={'main-header-component-section2-div-link' + isSelected("/")}>{t('menu_header.index')}</Link>
                            <Link to='/projects' className={'main-header-component-section2-div-link' + isSelected("/projects")}>{t('menu_header.projects')}</Link>
                            <Link to='/aboutme' className={'main-header-component-section2-div-link' + isSelected("/aboutme")}>{t('menu_header.aboutme')}</Link>
                            <Link to='/services' className={'main-header-component-section2-div-link' + isSelected("/services")}>{t('menu_header.services')}</Link>
                            <Link to='/contact' className={'main-header-component-section2-div-link' + isSelected("/contact")}>{t('menu_header.contact')}</Link>
                        </div>
                        <div className='main-header-language-selector'>
                            <div className='main-header-language-dropdown'>
                                <img className='main-header-avatar-img' src={flag.url} alt={flag.alt} />
                                <img className='main-header-avatar-arrow' src={arrow_down.url} alt={arrow_down.alt} />
                                <article className="main-header-avatar-dropdown">
                                    <p className='main-header-avatar-dropdown-lang' onClick={() => changeLanguage("es")}>
                                        <img src={flag_mx.url} alt={flag_mx.alt} />
                                        ES
                                    </p>
                                    <p className='main-header-avatar-dropdown-lang' onClick={() => changeLanguage("en")}>
                                        <img src={flag_usa.url} alt={flag_usa.alt} />
                                        EN
                                    </p>
                                </article>
                            </div>
                        </div>
                    </section>
                </>
            )
            }
        </header>
    );

}