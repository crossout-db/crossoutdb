import React from 'react';

interface RarityButtonProps {
    color: string;
    active?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RarityButton: React.FC<RarityButtonProps> = ({ color, active, onClick, size }) => {
    let whString = 'w-[32px] h-[32px]';
    switch (size) {
        case 'small':
            whString = 'w-[24px] h-[24px]';
            break;
        case 'medium':
            whString = 'w-[32px] h-[32px]';
            break;
        case 'large':
            whString = 'w-[42px] h-[42px]';
            break;
    }

    return (
        <button className={`align-top bg-black border border-xoPrimary  ${whString} ${active ? 'border-xoQuaternary shadow-orange-500 shadow-sm' : 'hover:border-white'}`} onClick={onClick} >
            <div className={`m-auto w-1/2 h-1/2 ${color}`}></div>
        </button>
    );
};

export default RarityButton;