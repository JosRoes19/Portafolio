import { useTranslation } from "react-i18next";
import { BtnLined } from "../../../components/BtnLined/BtnLined";
import Animator from "../../../components/Animator/Animator";
import { arrow_right, arrow_right_white, ReactLogo, AngularLogo, LaravelLogo } from '../../../data/img/img-data';
import './content-index.scss';

export const ContentIndex = () => {
    const { t } = useTranslation();

    return (
        <div className='section-content-index'>
            {/* Sección de título */}
            <div className='container-content-header'>
                <Animator type="fade" duration={0.8}>
                    <h2 className='content-header-title'>{t('index.content.content_title')}</h2>
                </Animator>
            </div>

            {/* Grid de tecnologías */}
            <div className='container-content-grid'>
                {/* React Card */}
                <div className='content-card react-card'>
                    <Animator type="LeftHorizontal" duration={0.8}>
                        <div className='card-inner'>
                            <div className='card-icon'>
                                <img src={ReactLogo.url} alt={ReactLogo.alt} className='tech-icon' />
                            </div>
                            <h3 className='card-title'>React</h3>
                            <p className='card-text'>{t('index.content.react_text') || 'Biblioteca para construir interfaces interactivas y dinámicas.'}</p>
                        </div>
                    </Animator>
                </div>

                {/* Angular Card */}
                <div className='content-card angular-card'>
                    <Animator type="RightHorizontal" duration={0.8}>
                        <div className='card-inner'>
                            <div className='card-icon'>
                                <img src={AngularLogo.url} alt={AngularLogo.alt} className='tech-icon' />
                            </div>
                            <h3 className='card-title'>Angular</h3>
                            <p className='card-text'>{t('index.content.angular_text') || 'Framework completo para aplicaciones empresariales escalables.'}</p>
                        </div>
                    </Animator>
                </div>

                {/* Contenido Principal */}
                <div className='content-card main-card'>
                    <Animator type="fade" duration={0.8} delay={0.2}>
                        <div className='main-content-inner'>
                            <div className='main-icon'>
                                <img src={LaravelLogo.url} alt={LaravelLogo.alt} className='main-logo' />
                            </div>
                            <h2 className='main-title'>{t('index.content.content_subtitle')}</h2>
                            <p className='main-text'>{t('index.content.content_text1')}</p>
                            <p className='main-text'>{t('index.content.content_text2')}</p>
                            <p className='main-text'>{t('index.content.content_text3')}</p>
                            <div className='main-button'>
                                <BtnLined 
                                    to='/aboutUs' 
                                    className='content-button' 
                                    text={t('global.button_conoce')} 
                                    customColor='white' 
                                    customIcon={arrow_right_white}
                                    hoverIcon={arrow_right}
                                />
                            </div>
                        </div>
                    </Animator>
                </div>
            </div>
        </div>
    );
};