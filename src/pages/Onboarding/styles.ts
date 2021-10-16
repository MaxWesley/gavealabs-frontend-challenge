import styled from 'styled-components';

import BGOnboarding from '../../assets/images/bg-onboarding.png';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    
    background-image: url(${BGOnboarding});
    background-position: center;
    background-repeat: no-repeat;
    /* background-size: contain; */
    background-color: #221700;

    padding: 45px 21px 68px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    main section {
        margin-top: 45px;
    }
`;

export const Logo = styled.img``;

export const WelcomeText= styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 36px;

    line-height: 43px;
    letter-spacing: -0.02em;

    color: #FFFFFF;
`;

interface ButtonProps {
    buttonStyle: 'outline' | 'confirm';
}

export const Button = styled.button<ButtonProps>`
    width: 100%;
    max-width: 333px;
    height: 55px;

    border-radius: 4px;

    ${props => props.buttonStyle === 'confirm' ?
        'background-color: #FF6900;'
        :
        `
            background-color: transparent;
            border: 1px solid #FFFFFF;
        `
    }

    color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 15px;

    & + & {
        margin-top: 15px;
    }
`;