import { useHistory } from 'react-router-dom';
import { Container, Logo, WelcomeText } from "./styles";

import LOGOGaveaPNG from '../../assets/images/logo-gavea.png';
import { Button } from "../../components/Button";

function Onboarding() {
    const router = useHistory();

    return (
        <Container>
            <header>
                <Logo src={LOGOGaveaPNG} alt="Logo gavea" />
            </header>
            <main>
                <WelcomeText>
                    Bem-vindo a <br />
                    sua bolsa digital<br />
                    de commodities
                </WelcomeText>
                <section>
                    <Button
                        buttonStyle="confirm"
                        content="Entrar"
                        action={() => router.push('/login')}
                    />
                    <Button
                        buttonStyle="outline"
                        content="Criar Conta"
                        action={() => router.push('/sign-up')}
                    />
                </section>
            </main>
        </Container>
    );
}

export { Onboarding };