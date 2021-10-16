import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";

import { Container } from "./styles";

import eyerIconPNG from '../../assets/images/icons/eyer.png';

interface TextInputProps {
    label?: string;
    icon?: React.ReactNode;
    isSecurity?: boolean;
    inputType?: HTMLInputTypeAttribute;
}

function TextInput({ label, icon, isSecurity, inputType }: TextInputProps) {
    const [text, setText] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (text: ChangeEvent<HTMLInputElement>) => setText(text.target.value);
    
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
                value={text}
                onChange={handleChange}
                required
            />
            {isSecurity &&
                <button type="button" onClick={handleShowPassword}>
                    <img src={eyerIconPNG} />
                </button>
            }
        </Container>
    );
}

export { TextInput };