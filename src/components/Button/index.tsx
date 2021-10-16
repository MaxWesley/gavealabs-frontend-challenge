import {  Container } from "./styles";

interface ButtonProps {
    content: string;
    to: string;
    buttonStyle: iButtonStyle;
}

function Button({ content, to, buttonStyle }: ButtonProps) {
    return (
        <Container to={to} buttonStyle={buttonStyle}>
            {content}
        </Container>
    );
}

export { Button };