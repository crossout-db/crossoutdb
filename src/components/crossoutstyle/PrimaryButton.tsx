interface PrimaryButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    active?: boolean;
    disabled?: boolean;
}

const PrimaryButton = ({ children, onClick, active, disabled }: PrimaryButtonProps) => {
    return (
        <button disabled={disabled ?? false} className={`${!disabled ? 'disabled:false hover:border-white' : ''} w-28 border-xoPrimary flex items-center px-2 py-1 border bg-secondary ${active ? 'border-xoQuaternary shadow-orange-500 shadow text-white' : 'text-xoPrimary'}`} onClick={onClick}>{children}</button>
    );
};

export default PrimaryButton;