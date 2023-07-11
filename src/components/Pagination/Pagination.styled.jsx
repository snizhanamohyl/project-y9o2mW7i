import styled from 'styled-components';
import { createTheme } from '@mui/material/styles';



export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const theme = createTheme({
    components: {
      MuiPagination: {
        styleOverrides: {
          root: {
            background: '#FAFAFA',
            borderRadius: '26px',
            boxShadow: '0px 4px 4px 0px rgba(135, 135, 135, 0.20)',
          },
          ul: {
            paddingTop: '12px',
            paddingBottom: '12px',
            fontSize: '12px',
            color: '#656565',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'normal',
          },
        },
      },
      MuiPaginationItem: {
        styleOverrides: {
            root: {
                '&.Mui-selected': {
                    background: '#EBF3D4',
                },
                '&:hover': {
                    background: '#EBF3D4', 
                },
                '&$selected': {
                    background: '#EBF3D4', 
                    '&:hover': {
                      background: '#EBF3D4', 
                },
                '&:active': {
                    background: '#EBF3D4', 
                },
            },
        },
    },
  },
  MuiButtonBase: {
    styleOverrides: {
        root: {
            '&:active': {
                background: 'none',
            },
            '&.Mui-selected': {
                background: '#EBF3D4',
            },
        }
    }
  }
}});
