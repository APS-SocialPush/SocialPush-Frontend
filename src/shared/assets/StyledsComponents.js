import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Item from '@mui/material/ListItem';

export const StyledTypographyTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    width: '100%',
}));

export const StyledTypographyBody = styled(Typography)(({ theme }) => ({
    margin: '10px',
    textAlign:'justify',
    fontSize: '16px',
    width: '100%',
}));

export const StyledItemGrid = styled(Item)(({ theme }) => ({
    backgroundColor: 'transparent',
    border: '1px solid #ffffff',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '200px', // Minimum height
    minWidth: '200px',
    justifyContent: 'center'
}));