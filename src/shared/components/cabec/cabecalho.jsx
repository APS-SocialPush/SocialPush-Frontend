import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

export const Cabecalho = () => {
    return (
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
                    <Avatar alt="Profile" src="/profileIcon.png" />
                    <Typography variant="h5">Jordana Moraes</Typography>
                </Stack>
            </div>
        </div>
    );
}