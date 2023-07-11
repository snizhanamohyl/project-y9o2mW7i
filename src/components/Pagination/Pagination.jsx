import React from "react";
import Pagination from '@mui/material/Pagination';
import { Container, theme } from './Pagination.styled.jsx';
import { ThemeProvider } from '@mui/material/styles';


const Paginations = ({setCurrentPage, recipesPerPage, totalRecipe, currentPage}) => {
    
    const totalPageRecipe = Math.ceil(totalRecipe / recipesPerPage)

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    return (
        
        <Container>
            <ThemeProvider theme={theme}>
                <Pagination count={totalPageRecipe} page={currentPage} onChange={handlePageChange} 
                sx={{ '@media screen and (min-width: 767px)': {
                        '& ul': {
                            paddingTop: '14px',
                            paddingBottom: '14px',
                        },
                        },
                    }}/>
            </ThemeProvider>
        </Container>
    )
}

export default Paginations;