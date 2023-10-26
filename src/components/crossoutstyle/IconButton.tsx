import { isString } from 'lodash';
import React from 'react';
import { Icon } from 'react-feather';

interface IconButtonProps {
    Content: string | Icon;
    active?: boolean;
    icon?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton: React.FC<IconButtonProps> = ({ Content, active, icon, disabled, onClick, size }) => {
    let whString = 'w-[32px] h-[32px]';
    let iconSize = 28;
    switch (size) {
        case 'small':
            whString = 'w-[24px] h-[24px]';
            iconSize = 18;
            break;
        case 'medium':
            whString = 'w-[32px] h-[32px]';
            iconSize = 26;
            break;
        case 'large':
            whString = 'w-[42px] h-[42px]';
            iconSize = 36;
            break;
    }

    let content;
    if (icon && isString(Content))
        content = <img src={Content} className={`w-75 h-75 m-auto ${active ? 'filter-none' : 'filter-grayscale'}`} />;
    if (icon && !isString(Content))
        content = <Content size={iconSize} className={`m-auto ${active ? 'filter-none' : 'filter-grayscale'}`} />;
    if (!icon && isString(Content))
        content = <span className={`text-lg font-bold`}>{Content}</span>;

    return (
        <button disabled={disabled} className={`text-white align-top bg-black border border-xoPrimary  disabled:border-opacity-50 disabled:bg-opacity-50 disabled:text-opacity-50 ${whString} ${active ? 'border-xoQuaternary shadow-orange-500 shadow-sm' : 'hover:border-white'}`} onClick={onClick} >
            {content}
        </button>
    );
};

export default IconButton;