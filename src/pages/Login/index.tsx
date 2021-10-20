import { TextInput } from "../../components/TextInput";
import { Container, CreateAccountText, Form, FormText } from "./styles";

import emailIconPNG from '../../assets/images/icons/email.png';
import lockerIconPNG from '../../assets/images/icons/locker.png';

import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useAuth } from "../../hooks/auth";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useAuth();

    const handleSubmit = (form: FormEvent) => {
        form.preventDefault();

        signIn(email, password);
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <FormText>
                    <span>Olá!</span>
                    Seja bem-vindo.
                </FormText>
                <main>
                    <TextInput
                        label="Email"
                        icon={<img src={emailIconPNG} />}
                        inputType="email"
                        value={email}
                        setValue={setEmail}
                    />
                    <TextInput
                        label="Senha"
                        icon={<img src={lockerIconPNG} />}
                        isSecurity={true}
                        value={password}
                        setValue={setPassword}
                    />
                </main>
                <Button
                    buttonStyle="confirm"
                    content="Entrar"
                    buttonType="submit"
                />
            </Form>
            <CreateAccountText>
                Não tem uma conta? <Link to="/sign-up">Criar conta</Link>
            </CreateAccountText>
        </Container>
    );
}

export { Login };