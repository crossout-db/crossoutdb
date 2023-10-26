import allIcon from '~/../public/icons/categories/all.png';
import resourcesIcon from '~/../public/icons/categories/resources.png';
import customizationIcon from '~/../public/icons/categories/customization.png';
import decorIcon from '~/../public/icons/categories/decor.png';
import movementIcon from '~/../public/icons/categories/movement.png';
import hardwareIcon from '~/../public/icons/categories/hardware.png';
import weaponsIcon from '~/../public/icons/categories/weapons.png';
import cabinsIcon from '~/../public/icons/categories/cabins.png';
import Image from 'next/image';

interface CategoryIconProps {
    category: string | 'all' | 'resources' | 'customization' | 'decor' | 'movement' | 'hardware' | 'weapons' | 'cabins';
    opacity50?: boolean;
}

const CategoryIcon = ({ category, opacity50 }: CategoryIconProps) => {
    let src = allIcon;
    switch (category) {
        case 'all':
            src = allIcon;
            break;
        case 'resources':
            src = resourcesIcon;
            break;
        case 'customization':
            src = customizationIcon;
            break;
        case 'decor':
            src = decorIcon;
            break;
        case 'movement':
            src = movementIcon;
            break;
        case 'hardware':
            src = hardwareIcon;
            break;
        case 'weapons':
            src = weaponsIcon;
            break;
        case 'cabins':
            src = cabinsIcon;
            break;
    }

    return (
        <Image src={src} alt={category} className={opacity50 ? 'opacity-50' : ''} />
    );
};

export default CategoryIcon;