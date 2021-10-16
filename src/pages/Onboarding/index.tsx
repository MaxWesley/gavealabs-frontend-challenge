import { Container, Logo, WelcomeText } from "./styles";

import LOGOGaveaPNG from '../../assets/images/logo-gavea.png';
import { Button } from "../../components/Button";

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
                    <Button 
                        buttonStyle="confirm"
                        content="Entrar"
                        to='/login'  
                    />
                    <Button 
                        buttonStyle="outline"
                        content="Criar Conta"
                        to='/sing-up'  
                    />
                </section>
            </main>
        </Container>
    );
}

export { Onboarding };