import styled from 'styled-components';
import { createTheme } from '@mui/material/styles';
import './touch-pagination.css';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 22px;
    padding-bottom: 100px;

    @media screen and (min-width: 768px){
      padding-top: 32px;
      padding-bottom: 200px;
    }

    @media screen and (min-width: 1440px){
      padding-bottom: 100px;
    }
`

export const theme = createTheme({
    components: {
      MuiPagination: {
        styleOverrides: {
          root: {
            backgroundColor: 'var(--pagination-bg)',
            borderRadius: '26px',
            boxShadow: '0px 4px 4px 0px var(--pagination-shadow)',
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
              color: 'var(--pagination-color)',
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
                backgroundColor: 'var(--pagination-selected-bg)', 
                color: 'var(--pagination-selected)',
              },
              '&.MuiPaginationItem-root:hover': {
                backgroundColor: 'var(--pagination-selected-bg)',
              },
              '&.MuiPaginationItem-root.Mui-selected:hover': {
                backgroundColor: 'var(--pagination-selected-bg)',
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



