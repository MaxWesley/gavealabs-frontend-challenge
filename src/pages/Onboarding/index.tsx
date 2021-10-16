import { Button, Container, Logo, WelcomeText } from "./styles";

import LOGOGaveaPNG from '../../assets/images/logo-gavea.png';

function Onboarding() {
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
                    <Button buttonStyle="confirm">
                        Entrar
                    </Button>
                    <Button buttonStyle="outline">
                        Criar Conta
                    </Button>
                </section>
            </main>
        </Container>
    );
}

export { Onboarding };