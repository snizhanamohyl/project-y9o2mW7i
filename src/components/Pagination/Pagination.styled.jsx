import styled from 'styled-components';
import { createTheme } from '@mui/material/styles';
import './touch-pagination.css';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 22px;
    margin-bottom: 100px;

    @media screen and (min-width: 767px){
      padding-top: 32px;
      margin-bottom: 200px;
    }

    @media screen and (min-width: 1439px){
        margin-bottom: 100px;
    }
`

export const theme = createTheme({
    components: {
      MuiPagination: {
        styleOverrides: {
          root: {
            backgroundColor: 'var(--bg-color)',
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
                backgroundColor: 'var(--light-green-bg)', 
                color: 'var(--dark-accent)',
              },
              '&.MuiPaginationItem-root:hover': {
                backgroundColor: 'var(--light-green-bg)',
              },
              '&.MuiPaginationItem-root.Mui-selected:hover': {
                backgroundColor: 'var(--light-green-bg)',
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



