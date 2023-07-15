import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const CustomConteiner = styled(Box)(({ theme }) => ({
  marginTop: '50px',
  '@media (min-width: 1440px)': {
    marginTop: '100px',
  },
}));
