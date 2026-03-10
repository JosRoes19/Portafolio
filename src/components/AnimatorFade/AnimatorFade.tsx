import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import useMobile from "../../hooks/useMobile";

interface Props {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    delay?: number;
}

const AnimatorFadeUp = ({ className = '', children, style, delay = 0 }: Props) => {
    const { ref, inView } = useInView();
    const { isMobile } = useMobile();

    const variants: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: isMobile ? 1 : 1.5,
                delay: delay,
                ease: "easeInOut" as const
            }
        },
        hidden: { 
            opacity: 0.0001, 
            y: 90 
        }
    };

    return (
        <motion.div
            className={className}
            style={style}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            exit={{ opacity: 0.0001 }}
        >
            {children}
        </motion.div>
    );
};

export default React.memo(AnimatorFadeUp);