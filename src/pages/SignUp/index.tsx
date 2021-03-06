import { TextInput } from "../../components/TextInput";
import { Container, CreateAccountText, Form, FormText } from "./styles";

import emailIconPNG from '../../assets/images/icons/email.png';
import lockerIconPNG from '../../assets/images/icons/locker.png';
import personaIconPNG from '../../assets/images/icons/persona.png';

import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { signUp } = useAuth();

    const handleSubmit = (form: FormEvent) => {
        form.preventDefault();

        if(confirmPassword === password) {
            signUp(email, password, name);
        } else {
            toast.error('As duas senhas não conferem. Tente novamente ...');
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <FormText>
                    Criar Conta
                </FormText>
                <main>
                    <TextInput
                        label="Nome completo"
                        icon={<img src={personaIconPNG} alt="person icon" />}
                        inputType="text"
                        value={name}
                        setValue={setName}
                    />
                    <TextInput
                        label="Email"
                        icon={<img src={emailIconPNG} alt="email icon" />}
                        inputType="email"
                        value={email}
                        setValue={setEmail}
                    />
                    <TextInput
                        label="Senha"
                        icon={<img src={lockerIconPNG} alt="locker icon" />}
                        inputType="password"
                        isSecurity={true}
                        value={password}
                        setValue={setPassword}
                    />
                    <TextInput
                        label="Confirmar Senha"
                        icon={<img src={lockerIconPNG} alt="locker icon" />}
                        inputType="password"
                        isSecurity={true}
                        value={confirmPassword}
                        setValue={setConfirmPassword}
                    />
                </main>
                <Button
                    buttonStyle="confirm"
                    content="Entrar"
                    buttonType="submit"
                />
            </Form>
            <CreateAccountText>
                Já tem uma conta? <Link to="/login">Faça o login</Link>
            </CreateAccountText>
        </Container>
    );
}

export { SignUp };