import { useTranslation } from "react-i18next";
import { BtnLined } from "../../../components/BtnLined/BtnLined";
import Animator from "../../../components/Animator/Animator";
import { icon_arrow_right } from '../../../data/img/img-data';
import './content-index.scss';

export const ContentIndex = () => {
    const { t } = useTranslation();

    return (
        <div className='div-content-index'>
                <div className='div-content-index-div1'>
                    {/* <Animator type="slide"> */}
                        <h1 className='div-content-index-div1-h1'>{t('index.content.content_title')}</h1>
                    {/* </Animator> */}
                </div>
                <div className='div-content-index-div2'>
                    <Animator type="LeftHorizontal" duration={1.2}>
                        {/* <img src={} alt={} className='div-content-index-div2-img'/>
                        <img src={} alt={} className='div-content-index-div2-img-mobile'/> */}
                        <p>Aqui va contenido</p>
                    </Animator>
                </div>
                <div className='div-content-index-div3'>
                    <Animator type="RightHorizontal" duration={1.2}>
                        {/* <img src={} alt={} className='div-content-index-div3-img'/> */}
                        <p>aqui va contenido</p>
                    </Animator>
                </div>
                <div className='div-content-index-div4'>
                    <Animator>
                        {/* <img src={} alt={} className='div-content-index-div4-logo'/> */}
                        <h1 className='div-content-index-div4-h1'>{t('index.content.content_subtitle')}</h1>
                        <h2 className='div-content-index-div4-h2'>{t('index.content.content_text1')}</h2>
                        <BtnLined to='/aboutUs' className='index-content-button' text={t('global.button_conoce')} customColor='black' customIcon={icon_arrow_right} />
                    </Animator>
                </div> 
            </div>
    )
}