import React from "react";
import { m, useReducedMotion } from "framer-motion";
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
    const prefersReducedMotion = useReducedMotion();

    if (!animationSettings) return null;

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <div style={{ ...{overflow: !noOverflow ? 'hidden' : 'visible', position: 'relative'}, ...(parentFlex ? { flex: 1 } : {}) }}>
            <m.div
                className={className}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animationSettings}
                transition={{ duration, delay }}
            >
                {children}
            </m.div>
        </div>
    );
};

export default React.memo(AnimatorFade);