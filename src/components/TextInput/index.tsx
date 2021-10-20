import { ChangeEvent, Dispatch, HTMLInputTypeAttribute, SetStateAction, useState } from "react";

import { Container } from "./styles";

import eyerIconPNG from '../../assets/images/icons/eyer.png';
interface TextInputProps {
    label?: string;
    icon?: React.ReactNode;
    isSecurity?: boolean;
    inputType?: HTMLInputTypeAttribute;
    value: any;
    setValue: Dispatch<SetStateAction<string>>;
}

function TextInput({ label, icon, isSecurity, inputType, setValue, value }: TextInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (text: ChangeEvent<HTMLInputElement>) => {
        setValue(text.target.value);
    };
    
    const handleShowPassword = () => setShowPassword(current => !current);

    return (
        <Container htmlFor={`input-${label?.trim()}`}>
            <span>
                {icon}
            </span>
            <input
                id={`input-${label}`}
                placeholder={label}
                type={((isSecurity && !showPassword) ? 'password' : "text") || inputType}
                value={value}
                onChange={handleChange}
                required
            />
            {isSecurity &&
                <button type="button" onClick={handleShowPassword}>
                    <img src={eyerIconPNG} alt='password icon' />
                </button>
            }
        </Container>
    );
}

export { TextInput };