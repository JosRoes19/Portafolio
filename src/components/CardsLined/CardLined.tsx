import './CardLined.scss';

interface CardsLinedProps {
    name: string;
    icon?: {
        url: string;
        alt: string;
    } | string; 
    user?: string;
    redirect?: string; 
    className?: string;
    description?: string;
}

interface CardContentProps {
    icon?: CardsLinedProps['icon'];
    name: string;
    user?: string;
    description?: string;
}

const CardContent = ({ icon, name, user, description }: CardContentProps) => {
    const getIconSrc = () => {
        if (!icon) return null;
        if (typeof icon === 'object' && icon !== null && 'url' in icon) {
            return icon.url;
        }
        return icon;
    };

    const getIconAlt = () => {
        if (!icon) return '';
        if (typeof icon === 'object' && icon !== null && 'alt' in icon) {
            return icon.alt;
        }
        return name;
    };

    return (
        <>
            {icon && (<img 
                src={getIconSrc()!} 
                alt={getIconAlt()} 
                className='tech-icon' 
                width={24} height={24}
            />)}
            <div className='tech-info'>
                <span className="tech-name">{name}</span>
                {user && <span className='tech-user'>{user}</span>}
                {description && <span className='tech-user'>{description}</span>}
            </div>
        </>
    );
};

export const CardsLined = ({ name, icon, user, redirect, className, description }: CardsLinedProps) => {
    const openExternalLink = () => {
        if (redirect) {
            window.open(redirect, '_blank', 'noopener,noreferrer');
        }
    };

    if (redirect) {
        return (
            <button className={`tech-card-item ${className || ''}`}
                onClick={openExternalLink}
            >
                <CardContent icon={icon} name={name} user={user} description={description} />
            </button>
        );
    }

    return (
        <div className={`tech-card-item ${className || ''}`}>
            <CardContent icon={icon} name={name} user={user} description={description} />
        </div>
    );
};