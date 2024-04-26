import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { StyledTypographyTitle } from '../../shared/assets/StyledsComponents';
import { StyledTypographyBody } from '../../shared/assets/StyledsComponents';
import { StyledItemGrid } from '../../shared/assets/StyledsComponents';
import './HomePage.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#2F185F',
    padding: 3,
    textAlign: 'center',
    height: '100%',
    width: '100%',
}));

export const HomePage = () => {

    return (
        <div style={{ zIndex: 1, position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontWeight: 'bold' }} variant="body1" color={'#3686FF'}>ESTRATÉGIAS DE SUCESSO</Typography>
                <Typography sx={{ fontWeight: 'bold' }} variant="h4" color={'White'}>Domine sua presença online, um post de cada vez.</Typography>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant="body1" color={'#White'}>Maximize sua eficiência digital com nosso agendador de posts - agende com facilidade, mantenha-se consistente e eleve sua presença online!</Typography>
                    <img src={"/logosSocial.png"} alt="My Icon" style={{ marginRight: '10px' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography marginTop="30px" sx={{ fontWeight: 'bold' }} variant="h4" color={'#3686FF'}>PORQUE USAR NOSSO APP?</Typography>
                </div>
            </div>

            <div>
                <Box sx={{ flexGrow: 1, marginRight: '40px', marginTop: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid xs={12} sm={6} md={4} sx={{ '&:hover': { transform: 'scale(1.02)', transition: 'all 0.3s ease-in-out' } }}>
                            <StyledItemGrid >
                                <div className='divItemGrid'>
                                    <img src={"/image1.png"} alt="img1" style={{boxShadow:'0 0 5px 5px rgba(45, 112, 151, 1)'}} />
                                    <StyledTypographyTitle variant="h5" component="h2" >
                                        Economia de tempo
                                    </StyledTypographyTitle>
                                </div>
                                <StyledTypographyBody variant="body2" color="white">
                                    Um app de gerenciamento permite programar várias postagens de uma vez, economizando tempo diário ao evitar a necessidade de postar manualmente em diferentes horários.
                                </StyledTypographyBody>
                            </StyledItemGrid>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} sx={{ '&:hover': { transform: 'scale(1.02)', transition: 'all 0.3s ease-in-out' } }}>
                            <StyledItemGrid>
                                <div className='divItemGrid'>
                                    <img src={"/image2.png"} alt="img2" style={{boxShadow:'0 0 5px 5px rgba(140, 37, 28, 1)'}}/>
                                    <StyledTypographyTitle variant="h5" component="h2">
                                        Presença online
                                    </StyledTypographyTitle>
                                </div>
                                <StyledTypographyBody variant="body2" color="white">
                                    Ao agendar postagens, você mantém uma presença consistente nas redes sociais, o que é fundamental para manter o engajamento com seu público.
                                </StyledTypographyBody>
                            </StyledItemGrid>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} sx={{ '&:hover': { transform: 'scale(1.02)', transition: 'all 0.3s ease-in-out' } }}>
                            <StyledItemGrid>
                                <div className='divItemGrid'>
                                    <img src={"/image3.png"} alt="img3" style={{boxShadow:'0 0 5px 5px rgba(25, 101, 75, 1)'}}/>
                                    <StyledTypographyTitle variant="h5" component="h2">
                                        Análise de desempenho
                                    </StyledTypographyTitle>
                                </div>
                                <StyledTypographyBody variant="body2" color="white">
                                    O aplicativo oferece análises detalhadas sobre o desempenho das postagens, permitindo entender melhor quais tipos de conteúdo funcionam melhor com sua audiência.
                                </StyledTypographyBody>
                            </StyledItemGrid>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} sx={{ '&:hover': { transform: 'scale(1.02)', transition: 'all 0.3s ease-in-out' } }}>
                            <StyledItemGrid>
                                <div className='divItemGrid'>
                                    <img src={"/image4.png"} alt="img4" style={{boxShadow:'0 0 5px 5px rgba(121, 101, 37, 1)'}} />
                                    <StyledTypographyTitle variant="h5" component="h2">
                                        Gestão de várias contas
                                    </StyledTypographyTitle>
                                </div>
                                <StyledTypographyBody variant="body2" color="white">
                                    Se você gerencia várias contas de redes sociais (por exemplo, para diferentes marcas ou projetos), um app de gerenciamento pode facilitar o controle centralizado de todas elas.
                                </StyledTypographyBody>
                            </StyledItemGrid>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} sx={{ '&:hover': { transform: 'scale(1.02)', transition: 'all 0.3s ease-in-out' } }}>
                            <StyledItemGrid>
                                <div className='divItemGrid'>
                                    <img src={"/image5.png"} alt="img5" style={{boxShadow:'0 0 5px 5px rgba(47, 24, 95, 1)'}}/>
                                    <StyledTypographyTitle variant="h5" component="h2">
                                        Planejamento estratégico
                                    </StyledTypographyTitle>
                                </div>

                                <StyledTypographyBody variant="body2" color="white">
                                    Com a capacidade de visualizar o calendário de postagens, é mais fácil planejar campanhas, eventos ou lançamentos, garantindo uma abordagem estratégica para suas postagens.
                                </StyledTypographyBody>
                            </StyledItemGrid>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} sx={{ '&:hover': { transform: 'scale(1.02)', transition: 'all 0.3s ease-in-out' } }}>
                            <StyledItemGrid>
                                <div className='divItemGrid'>
                                    <img src={"/image6.png"} alt="img6" style={{boxShadow:'0 0 5px 5px rgba(190, 35, 156, 1)'}} />
                                    <StyledTypographyTitle variant="h5" component="h2">
                                        Engajamento estratégicos
                                    </StyledTypographyTitle>
                                </div>
                                <StyledTypographyBody variant="body2" color="white">
                                    O aplicativo oferece insights sobre os melhores horários para postar, maximizando o potencial de engajamento com seu público-alvo.
                                </StyledTypographyBody>
                            </StyledItemGrid>
                        </Grid>
                    </Grid>
                </Box>
            </div>

        </div>
    );
}