import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.section`
    width: 100%;
    height: 150px;

    background-color: #01426A;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 99px;
        height: 45.66px;

        margin-top: 28.93px;
    }
`;

export const ProfileContainer = styled.div`
    background-color: #FFFFFF;

    padding: 15px 16px;
    margin-top: 33.42px;

    border-radius: 7px;

    display: flex;
    align-items: center;

    width: 100%;
    max-width: 333px;

    height: 80px;

    box-shadow: 0px 12px 35px rgba(1, 66, 106, 0.2);

    .imgProfile {
        width: 50px;
        height: 50px;

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #5998C5;

        box-shadow: 0px 3.6px 8.1px rgba(45, 56, 83, 0.2);

        p {
            font-family: 'Karla', sans-serif;
            font-weight: 400;
            font-size: 22px;

            color: #FFFFFF;
        }

        margin-right: 13px;
    }

    .infosProfile {
        font-family: 'Inter', sans-serif;

        h1 {
            color: #092A34;

            font-weight: 600;
            font-size: 20px;

            line-height: 100%;

            margin-bottom: 5px;
        }

        p {
            color: #748C94;

            font-size: 14px;
            line-height: 107.6%;

            opacity: 0.8;
        }
    }
`;

export const TableCommodities = styled.table`
    margin-top: 30px;

    font-family: 'Karla', sans-serif;
`;

export const TRHeadTable = styled.tr`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    text-align: left;
`;

interface TRTableProps {
    tagColor: string;
}

export const TRTable = styled.tr<TRTableProps>`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    align-items: center;

    position: relative;
    
    margin-top: 4px;
    margin-bottom: 8px;
    
    width: 100%;
    height: 50px;

    background-color: #FFFFFF;

    border: 1px solid #D2E3EF;
    border-radius: 4px;

    box-shadow: 0px 17px 60px rgba(45, 76, 113, 0.07), 
        0px 3.79717px 13.4018px rgba(45, 76, 113, 0.0417275), 
        0px 1.13052px 3.99006px rgba(45, 76, 113, 0.0282725);

    color: #47595F;

    &::after {
        content: " ";
        display: block;

        position: absolute;
        left: 0;
        top: 0;

        height: 100%;
        width: 5px;

        ${props => props.tagColor === 'green' ?
            'background-color: #06A75C;'
        :
            'background-color: #ED0000;'
        }
        
        border-radius: 4px 0px 0px 4px;
    }
`;

export const THTable = styled.th`
    font-family: 'Karla', sans-serif;
    font-weight: 500;
    font-size: 12px;

    line-height: 14px;

    color: #B1BEC2;
`;

interface TDTableProps {
    tagColor?: string;
}

export const TDTable = styled.td<TDTableProps>`
    font-size: 15px;

    margin: 10px 0;

    &:last-of-type {
        ${props => props.tagColor === 'green' ?
            'color: #06A75C;'
            :
            'color: #ED0000;'
        }
    }

    &:first-of-type {
        display: flex;
        align-items: center;

        margin: 0 10px;

        img {
            width: 30px;
            height: 30px;

            margin-top: 0;
            margin-right: 10px;
        }
    }
`;