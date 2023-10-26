import React from 'react';

interface DebouncedInputProps {
    value: string;
    onChange: (value: string) => void;
    debounce?: number;
}

function DebouncedInput({
    value: initialValue, onChange, debounce = 200, children, ...props
}: DebouncedInputProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
    const [value, setValue] = React.useState(initialValue);

    React.useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);

        return () => clearTimeout(timeout);
    }, [value]);

    return (
        // Render children with props
        <>
            {React.Children.map(children, child => {
                return React.cloneElement(child as React.ReactElement, {
                    ...props,
                    value,
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
                });
            })}
        </>

        // <TextField
        //     {...props}
        //     value={value}
        //     onChange={e => setValue(e.target.value)}
        // />
        //<input {...props} value={value} onChange={e => setValue(e.target.value)} />
    );
}

export default DebouncedInput;