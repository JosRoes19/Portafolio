import { useNavigate } from 'react-router-dom';
import { arrow_right } from '../../data/img/img-data';
import useMobile from '../../hooks/useMobile';
import './btnLined.scss';
import { useRef } from 'react';

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
    loading?: boolean;
    loaderColor?: string;
}

const BLACKS = [
    "#000",
    "#000000",
    "#00000000",
    "black"
]

interface RightElementProps {
    loading: boolean;
    noIcon?: boolean;
    hover: boolean;
    hoverIcon?: { url: string; alt: string };
    customIcon?: { url: string; alt: string };
    asFocused?: boolean;
    getLoaderColor: () => string;
}

const RightElement = ({ loading, noIcon, hover, hoverIcon, customIcon, asFocused, getLoaderColor }: RightElementProps) => {
    if (loading) {
        return (
            <div className="btn-lined-loader" style={{ borderColor: `${getLoaderColor()} transparent transparent transparent` }}>
                <div style={{ borderColor: `${getLoaderColor()} transparent transparent transparent` }}></div>
                <div style={{ borderColor: `${getLoaderColor()} transparent transparent transparent` }}></div>
                <div style={{ borderColor: `${getLoaderColor()} transparent transparent transparent` }}></div>
                <div style={{ borderColor: `${getLoaderColor()} transparent transparent transparent` }}></div>
            </div>
        );
    }
    
    if (!noIcon) {
        let iconSource;
        if (hover && hoverIcon) {
            iconSource = hoverIcon;
        } else if (customIcon) {
            iconSource = customIcon;
        } else {
            iconSource = arrow_right;
        }
        
        return (
            <img 
                src={iconSource.url} 
                alt={iconSource.alt} 
                style={{ filter: (hover && !hoverIcon) ? "invert(1)" : (asFocused ? "invert(1)" : "invert(0)") }} 
            />
        );
    }
    
    return null;
};

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
    loading = false,
    loaderColor,
    disabled,
    ...props
}: BtnOultinedProps) => {
    const navigate = useNavigate();
    const { isMobile } = useMobile();
    const width = (isMobile ? customMobileWidth : customWidth) ?? "fit-content";
    const height = (isMobile ? customMobileHeight : customHeight) ?? "fit-content";
    const hoverRef = useRef(false);

    const getLoaderColor = () => {
        if (loaderColor) return loaderColor;
        if (hoverRef.current && !asFocused) {
            return hoverColor ?? (BLACKS.includes(customColor ?? "#ffffff") ? "#ffffff" : "#000000");
        }
        return customColor ?? "#ffffff";
    };

    const navigateToTarget = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (loading || disabled) return;
        if (to) {
            navigate(to);
        } else if (onClick) {
            onClick(e);
        }
    };

    const hover = hoverRef.current;

    const sharedProps = {
        className: `component-btn-lined ${asFocused ? 'as-focuse' : ''} ${loading ? 'loading' : ''} ${className ?? ''}`,
        onClick: navigateToTarget,
        disabled: disabled || loading,
        style: {
            "--custom-color": customColor ?? "#ffffff",
            "--custom-text": hoverColor ?? (BLACKS.includes(customColor ?? "#ffffff") ? "#ffffff" : "#000000"),
            width,
            height,
            cursor: loading ? 'wait' : 'pointer'
        } as React.CSSProperties,
        ...props
    };

    return (
        <button
            onMouseEnter={() => { hoverRef.current = true; }}
            onMouseLeave={() => { hoverRef.current = false; }}
            {...sharedProps}
        >
            <span>{loading ? 'Enviando...' : text}</span>
            <RightElement 
                loading={loading}
                noIcon={noIcon}
                hover={hover}
                hoverIcon={hoverIcon}
                customIcon={customIcon}
                asFocused={asFocused}
                getLoaderColor={getLoaderColor}
            />
        </button>
    );
};