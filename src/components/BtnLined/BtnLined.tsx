import { useNavigate } from 'react-router-dom';
import { icon_arrow_right } from '../../data/img/img-data';
import useMobile from '../../hooks/useMobile';
import './btnLined.scss';
import { useState } from 'react';

interface BtnOultinedProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    noIcon?: boolean;
    to?: string;
    customIcon?: { url: string; alt: string };
    hoverIcon?: { url: string; alt: string };
    customColor?: string;
    hoverColor?: string;
    customWidth?: string;
    customHeight?: string;
    customMobileWidth?: string;
    customMobileHeight?: string;
    asFocused?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const BLACKS = [
    "#000",
    "#000000",
    "#00000000",
    "black"
]

export const BtnLined = ({ 
    text, 
    onClick,
    to,
    noIcon, 
    customIcon,
    hoverIcon,
    customColor,
    hoverColor,
    customWidth, 
    customMobileWidth, 
    customHeight, 
    customMobileHeight,
    className,
    asFocused,
    ...props
}: BtnOultinedProps) => {
    const navigate = useNavigate();
    const { isMobile } = useMobile();
    const width = (isMobile ? customMobileWidth : customWidth) ?? "fit-content";
    const height = (isMobile ? customMobileHeight : customHeight) ?? "fit-content";
    const [hover, setHover] = useState(false);

    if (asFocused) {
        return <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={"component-btn-lined as-focuse " + (className ?? "")}
            onClick={(e) => { !!to ? navigate(to) : (onClick && onClick(e)) }}
            style={{ "--custom-color": customColor ?? "#ffffff", "--custom-text": hoverColor ?? (BLACKS.includes(customColor ?? "#ffffff") ? "#ffffff" : "#000000"), width, height } as React.CSSProperties}
            {...props}
        >
            <span>{text}</span>
            { !noIcon && <img src={(((hover && !!hoverIcon) ? hoverIcon : hoverIcon) ?? icon_arrow_right).url} alt={(((hover && !!hoverIcon) ? hoverIcon : hoverIcon) ?? icon_arrow_right).alt} style={{ filter: (hover && !hoverIcon) ? "invert(1)": "invert(1)" }} /> }
        </button>
    }

    return (
        <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={"component-btn-lined " + (className ?? "")}
            onClick={(e) => { !!to ? navigate(to) : (onClick && onClick(e)) }}
            style={{ "--custom-color": customColor ?? "#ffffff", "--custom-text": hoverColor ?? (BLACKS.includes(customColor ?? "#ffffff") ? "#ffffff" : "#000000"), width, height } as React.CSSProperties}
            {...props}
        >
            <span>{text}</span>
            { !noIcon && <img src={(((hover && !!hoverIcon) ? hoverIcon : customIcon) ?? icon_arrow_right).url} alt={(((hover && !!hoverIcon) ? hoverIcon : customIcon) ?? icon_arrow_right).alt} style={{ filter: (hover && !hoverIcon) ? "invert(1)": "invert(0)" }} /> }
        </button>
    );
}