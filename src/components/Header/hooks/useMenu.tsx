import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useMenu = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [visibleClass, setVisibleClass] = useState("");
    const closeMenu = () => setIsVisible(false);
    const openMenu = () => setIsVisible(true);

    const go = (url: string, external: boolean = false) => {
        closeMenu();
        if (external)   return window.open(url, '_blank');
        else navigate(url);
    }

    useEffect(() => {
        setVisibleClass(isVisible ? " visible" : "");
        if (isVisible) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isVisible]);

    useEffect(() => {
        if (isVisible) setIsVisible(false);
    }, [pathname]);

    return { closeMenu, openMenu, visibleClass, go };
}