import { icon_whatsapp } from '../../data/img/img-data';
import { motion } from 'framer-motion';
import './whatsAppBtn.scss';

export const WhatsAppBtn = () => {
    return (

        <motion.div
            animate={{
                transform: "translateY(6px)",
                transition: {
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                }
            }} className="heart movil">
            <a href="https://wa.me/+523331171298" className="" target="_blank" rel=" whatsapp">
                <img src={icon_whatsapp.url} alt={icon_whatsapp.alt} />
            </a>
        </motion.div>

    );
}