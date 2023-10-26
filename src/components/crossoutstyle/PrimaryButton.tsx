interface PrimaryButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    active?: boolean;
}

const PrimaryButton = ({ children, onClick, active }: PrimaryButtonProps) => {
    return (
        <button className={`border-xoPrimary hover:border-white flex items-center px-2 py-1 border bg-secondary ${active ? 'border-xoQuaternary shadow-orange-500 shadow text-white' : 'text-xoPrimary'}`} onClick={onClick}>{children}</button>
    );
};

export default PrimaryButton;