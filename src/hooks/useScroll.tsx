import { useEffect } from "react";

export const useScroll = (id: string, init: boolean = true) => {
    const scrollTo = () => {
        const element = document.getElementById(id);
        if(element) element.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollTop = () => {
        window.scrollTo(0,0);
    }

    useEffect(() => {
        if(init) scrollTo();
    }, []);

    return { scrollTo, scrollTop }
}