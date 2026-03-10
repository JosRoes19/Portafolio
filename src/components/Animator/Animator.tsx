import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "../../hooks/useAnimation";
import type{ AnimationType } from "../../hooks/interfaces/AnimationProps";

interface Props {
    children: React.ReactNode;
    className?: string;
    type?: AnimationType;
    duration?: number;
    delay?: number;
    noOverflow?: boolean;
    parentFlex?: boolean;
}

const AnimatorFade = ({ className = '', children, type = 'slide', duration = 1.5 , delay = 0, noOverflow, parentFlex}: Props) => {
    const { ref, inView } = useInView();
    const animationSettings = useAnimation(type, duration);

    if (!animationSettings) return null;

    return (
        <div style={{ ...{overflow: !noOverflow ? 'hidden' : 'visible', position: 'relative'}, ...(parentFlex ? { flex: 1 } : {}) }}>
            <motion.div
                className={className}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animationSettings}
                transition={{ duration, delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default React.memo(AnimatorFade);