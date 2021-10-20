import {
    Container,
    Content,
    ProfileContainer,
    TableCommodities,
    TRTable,
    TDTable,
    THTable,
    TRHeadTable,
    ButtonSair
} from './styles';

import logoPNG from '../../assets/images/logo-gavea.png';

import { datas } from '../../services/datas';
import { useAuth } from '../../hooks/auth';

function Dashboard() {
    const { user, signOutUser } = useAuth();

    const handleNameUser = (name: string = 'Nome Usuário') => {
        let splitName = name?.split(' ');

        let newName = `${splitName[0]} ${splitName[1]}`;

        return newName;
    };

    return (
        <Container>
            <Content>
                <img src={logoPNG} alt="Logo Gavea" />
                <ProfileContainer>
                    <div className="imgProfile">
                        <p>Fr</p>
                    </div>
                    <div className="infosProfile">
                        <h1>Olá, {handleNameUser(user?.displayName)}</h1>
                        <p>Gavea Marketplace</p>
                    </div>
                </ProfileContainer>
                <TableCommodities>
                    <TRHeadTable>
                        <THTable style={{ textAlign: 'center' }}>Part</THTable>
                        <THTable>Pag</THTable>
                        <THTable>Ton</THTable>
                        <THTable>R$</THTable>
                    </TRHeadTable>
                    {datas.map(item => (
                        <TRTable tagColor={item.tagColor}>
                            <TDTable>
                                <img src={item.img} alt={`icon ${item.part}`} />
                                {item.part}
                            </TDTable>
                            <TDTable>{item.pag}</TDTable>
                            <TDTable>{item.ton}</TDTable>
                            <TDTable tagColor={item.tagColor}>{item.ammount}</TDTable>
                        </TRTable>
                    ))}
                </TableCommodities>
                <ButtonSair onClick={signOutUser}>
                    Sair
                </ButtonSair>
            </Content>
        </Container>
    );
}

export { Dashboard };