

import styles from './input.module.css';

interface Props {
    placeholder?: string;
    ariaLabel: string;
    id: string;
    type: string;
    min?: number;
    maxLength?: number;
    className?: string;
    onChange?: (e: React.ChangeEvent) => void;
    value?: string | number;
}

const Input = ({ placeholder, ariaLabel, id, type, min, maxLength, className, onChange, value }: Props) => {
    return (
        <input value={value} onChange={onChange} placeholder={placeholder && placeholder} aria-label={ariaLabel} type={type} id={id} min={min && min} maxLength={maxLength} className={`${styles.input} ${className && className}`} required />
    )
}

export default Input
