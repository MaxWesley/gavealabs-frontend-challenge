import styled from 'styled-components';

import BGOnboarding from '../../assets/images/bg-onboarding.png';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    
    background-image: url(${BGOnboarding});
    background-position: center;
    background-repeat: no-repeat;
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