

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    label: string;
    value: string;
}

export const Button = ({ label, ...props}: ButtonProps) => {
    return (
        <button {...props} className="button">
            {label}
        </button>
    )
}
