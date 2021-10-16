import { TextInput } from "../../components/TextInput";
import { Container, CreateAccountText, Form, FormText } from "./styles";

import emailIconPNG from '../../assets/images/icons/email.png';
import lockerIconPNG from '../../assets/images/icons/locker.png';
import personaIconPNG from '../../assets/images/icons/persona.png';

import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <Container>
            <Form>
                <FormText>
                    Criar Conta
                </FormText>
                <main>
                    <TextInput
                        label="Nome completo"
                        icon={<img src={personaIconPNG} />}
                        inputType="text"
                    />
                    <TextInput
                        label="Email"
                        icon={<img src={emailIconPNG} />}
                        inputType="email"
                    />
                    <TextInput
                        label="Senha"
                        icon={<img src={lockerIconPNG} />}
                        isSecurity={true}
                    />
                    <TextInput
                        label="Confirmar Senha"
                        icon={<img src={lockerIconPNG} />}
                        isSecurity={true}
                    />
                </main>
                <Button
                    buttonStyle="confirm"
                    content="Entrar"
                    buttonType="submit"
                    action={() => alert('clicou')}
                />
            </Form>
            <CreateAccountText>
                Já tem uma conta? <Link to="/login">Faça o login</Link>
            </CreateAccountText>
        </Container>
    );
}

export { SignUp };