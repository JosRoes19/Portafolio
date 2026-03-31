import './CardLined.scss';

interface CardsLinedProps {
    name: string;
    icon: {
        url: string;
        alt: string;
    } | string; 
    user?: string;
    redirect?: string; 
    className?: string;
}

export const CardsLined = ({ name, icon, user, redirect, className }: CardsLinedProps) => {
    const getIconSrc = () => {
        if (typeof icon === 'object' && icon !== null && 'url' in icon) {
            return icon.url;
        }
        return icon;
    };

    const getIconAlt = () => {
        if (typeof icon === 'object' && icon !== null && 'alt' in icon) {
            return icon.alt;
        }
        return name;
    };

    const handleClick = () => {
        if (redirect) {
            window.open(redirect, '_blank', 'noopener,noreferrer');
        }
    };

    const CardContent = () => (
        <>
            <img 
                src={getIconSrc()} 
                alt={getIconAlt()} 
                className='tech-icon' 
            />
            <div className='tech-info'>
                <span className="tech-name">{name}</span>
                {user && <span className='tech-user'>{user}</span>}
            </div>
        </>
    );

    if (redirect) {
        return (
            <a 
                href={redirect}
                target="_blank"
                rel="noopener noreferrer"
                className={`tech-card-item ${className || ''}`}
                onClick={(e) => {
                    e.preventDefault();
                    handleClick();
                }}
            >
                <CardContent />
            </a>
        );
    }

    return (
        <div className={`tech-card-item ${className || ''}`}>
            <CardContent />
        </div>
    );
};