import { arrow_top_scroll_icon } from '../../data/img/img-data';
import { motion } from 'framer-motion';
import './top_scroll.scss';
import { useScroll } from '../../hooks/useScroll';

export const ScrollTop = () => {
    const { scrollTop } = useScroll("", false);

    return (
        <motion.div
            animate={{
                    transform: "translateY(6px)",
                    transition: {
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }
                }}
                className="scroll-to-top-component movil"
                onClick={scrollTop}
        >
            <img src={arrow_top_scroll_icon.url} alt={arrow_top_scroll_icon.alt} />

        </motion.div>
    )
}