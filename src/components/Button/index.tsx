import { Container } from "./styles";
interface ButtonProps {
    content: string;
    action?(): any;
    buttonStyle: iButtonStyle;
    buttonType?: iButtonType;
}

function Button({ content, action, buttonStyle, buttonType }: ButtonProps) {

    const handleClick = () => {
        if(action) {
            action();
        }
    }

    return (
        <Container
            buttonStyle={buttonStyle}
            type={buttonType}
            onClick={handleClick}
        >
            {content}
        </Container>
    );
}

export { Button };