import {Box} from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const HomePage = () => {

    return (
        <div style={{ zIndex: 1, position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '40px', marginRight: '90px' }}>
                <div>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                borderColor: '#ddd',
                                borderWidth: 1,
                                borderStyle: 'solid',
                                borderRadius: 1,
                                padding: 1,
                                width: '100%',
                            }}
                        >
                            <SearchIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
                            <TextField
                                id="input-with-sx"
                                label="Search"
                                variant="standard"
                                sx={{
                                    flex: 1,
                                    minWidth: '200px',
                                    '& .MuiInputBase-input': {
                                        color: 'white',
                                    },
                                    '& label.Mui-focused': {
                                        color: 'white',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: 'white',
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                </div>

                <div>
                    <Stack direction="row" alignItems={'center'} spacing={2}>
                        <Avatar alt="Profile" src="/static/images/avatar/1.jpg" />
                        <Typography variant="h5">Kennedy</Typography>
                    </Stack>
                </div>
            </div>

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
                <h1>Grid</h1>
            </div>

        </div>
    );
}