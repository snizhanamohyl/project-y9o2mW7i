import styled from 'styled-components';
import { createTheme } from '@mui/material/styles';
import './touch-pagination.css';


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
            backgroundColor: '#FAFAFA',
            borderRadius: '26px',
            boxShadow: '0px 4px 4px 0px rgba(135, 135, 135, 0.20)',
          },
          ul: {
            paddingTop: '12px',
            paddingBottom: '12px',
            paddingLeft: '28px',
            paddingRight: '28px',
          },
        },
      },
      MuiPaginationItem: {
        styleOverrides: {
            root: {
              color: '#656565',
              fontSize: '12px',
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'normal',
            },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
            root: {
              '&.MuiPaginationItem-root.Mui-selected': {
                backgroundColor: '#EBF3D4', 
                color: '#22252A',
              },
              '&.MuiPaginationItem-root:hover': {
                backgroundColor: '#EBF3D4',
              },
              '&.MuiPaginationItem-root.Mui-selected:hover': {
                backgroundColor: '#EBF3D4',
              }
            }
        }
      },
      MuiTouchRipple: {
        defaultProps: {
          classes: {
            root: 'touch-ripple', 
          },
        },
      },
}});



