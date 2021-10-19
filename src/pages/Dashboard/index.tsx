import { 
    Container, 
    Header, 
    ProfileContainer, 
    TableCommodities,
    TRTable,
    TDTable,
    THTable, 
    TRHeadTable
} from './styles';

import logoPNG from '../../assets/images/logo-gavea.png';

import { datas } from '../../services/datas';

function Dashboard() {
    return(
        <Container>
            <Header>
                <img src={logoPNG} alt="Logo Gavea" />
                <ProfileContainer>
                    <div className="imgProfile">
                        <p>Fr</p>
                    </div>
                    <div className="infosProfile">
                        <h1>Olá, Francisco</h1>
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
                                <img src={item.img}alt={`icon ${item.part}`} />
                                {item.part}
                            </TDTable>
                            <TDTable>{item.pag}</TDTable>
                            <TDTable>{item.ton}</TDTable>
                            <TDTable>{item.ammount}</TDTable>
                        </TRTable>
                    ))}
                </TableCommodities>
            </Header>
        </Container>
    );
}

export { Dashboard };