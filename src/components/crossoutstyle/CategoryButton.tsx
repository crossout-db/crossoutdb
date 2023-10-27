import React from 'react';
import CategoryIcon from './CategoryIcon';

interface CategoryButtonProps {
    onClick: (category: number) => void;
    category: number;
    active: boolean;
    size?: number;
}

const CategoryButton = ({ onClick, category, active, size }: CategoryButtonProps) => {
    size = size ?? 42;

    let categoryName = '';

    switch (category) {
        case 0:
            categoryName = 'all';
            break;
        case 1:
            categoryName = 'cabins';
            break;
        case 2:
            categoryName = 'weapons';
            break;
        case 3:
            categoryName = 'hardware';
            break;
        case 4:
            categoryName = 'movement';
            break;
        case 5:
            categoryName = 'structure';
            break;
        case 6:
            categoryName = 'decor';
            break;
        case 7:
            categoryName = 'dyes';
            break;
        case 8:
            categoryName = 'resources';
            break;
        case 9:
            categoryName = 'customization';
            break;
    }

    return (
        <button className={`bg-black border ${active ? 'border-xoQuaternary shadow shadow-orange-500' : 'border-xoPrimary hover:border-white'}`} style={{ width: size, height: size }} onClick={() => { onClick(category); }}>
            <CategoryIcon category={categoryName} opacity50={!active} />
        </button>
    );
};

export default CategoryButton;