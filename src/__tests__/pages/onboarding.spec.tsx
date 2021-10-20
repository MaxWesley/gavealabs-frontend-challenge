import { render, screen } from "@testing-library/react";
import Onboarding from "../../pages/Onboarding";

describe("Testing Onboarding page", () => {
    it("should be able to show button element with text 'Entrar'", () => {
        render(<Onboarding />);

        const buttonEntrar = screen.getByText('Entrar');

        expect(buttonEntrar).toBeInTheDocument();
    });
    
    it("should be able to show button element with text 'Criar Conta'", () => {
        render(<Onboarding />);

        const buttonCriarConta = screen.getByText('Criar Conta');

        expect(buttonCriarConta).toBeInTheDocument();
    });
});