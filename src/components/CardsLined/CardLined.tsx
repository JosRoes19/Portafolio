import './CardLined.scss';

interface CardsLinedProps {
    name: string;
    icon: {
        url: string;
        alt: string;
    } | string; 
}

export const CardsLined = ({ name, icon }: CardsLinedProps) => {
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

    return (
        <div className="tech-card-item">
            <img 
                src={getIconSrc()} 
                alt={getIconAlt()} 
                className='tech-icon' 
            />
            <span className="tech-name">{name}</span>
        </div>
    );
};