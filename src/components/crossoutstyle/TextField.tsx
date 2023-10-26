import React from 'react';
import { X, Icon } from 'react-feather';

interface TextFieldProps {
    placeholder?: string;
    icon?: Icon;
    size?: number;
    onChange?: (e: any) => void;
    value?: string;

}

const TextField: React.FC<TextFieldProps> = ({ placeholder, icon, size, onChange, value, ...props }) => {
    const [currentValue, setCurrentValue] = React.useState(value ?? '');
    const FeatherIcon = icon;
    placeholder = placeholder || '';
    size = size || 20;
    return (
        <div className='relative'>
            <input type='text' value={currentValue} onChange={(e) => { setCurrentValue(e.target.value); onChange && onChange(e); }} placeholder={!icon ? placeholder : ''} size={size} className='float-left w-100 peer left-0 top-0 bg-black border border-xoPrimary p-2 text-white hover:border-white focus:border-xoQuaternary focus:shadow-orange-500 focus:shadow focus:outline-none' />
            {FeatherIcon && <FeatherIcon className='absolute left-2 top-2 text-white pointer-events-none invisible peer-placeholder-shown:visible peer-focus:invisible' />}
            <X onClick={(e) => { setCurrentValue(''); onChange && onChange(e); }} className='absolute top-2 hover:text-orange-300 peer-placeholder-shown:invisible text-white drop-shadow-orange-500 right-1' />
        </div>
    );
};

export default TextField;