import React from "react";
import { Pagination } from '@mui/material';
import { Container, theme } from './Pagination.styled.js';
import { ThemeProvider } from '@mui/material/styles';
import useWindowWidth from 'hooks/useWindowWidth';

const Paginations = ({setCurrentPage, recipesPerPage, totalRecipe, currentPage}) => {
    
    const totalPageRecipe = Math.ceil(totalRecipe / recipesPerPage)

    const widthViewport = useWindowWidth();     

    const onClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"}) 
    }

    const handlePageChange = (event, page) => {
        setCurrentPage(page);

        onClick();
    };

    return (
        
        <Container>
            <ThemeProvider theme={theme}>
                <Pagination  
                count={totalPageRecipe}  
                boundaryCount={widthViewport < 767 ? 0 : 1} 
                siblingCount={widthViewport < 767 ? 1 : 2} 
                defaultPage={1} 
                page={currentPage} 
                onChange={handlePageChange} 
                sx={{ '@media screen and (min-width: 767px)': {
                        '& ul': {
                            paddingTop: '14px',
                            paddingBottom: '14px',
                            paddingLeft: '24px',
                            paddingRight: '24px',
                        },
                    }
                    }}/>
            </ThemeProvider>
        </Container>
    )
}

export default Paginations;


// boundaryCount: Определяет количество всегда видимых страниц в начале и в конце списка страниц. 
// Например, если boundaryCount установлен на 1, то будет видно по одной странице в начале и в конце списка страниц.

// siblingCount: Определяет количество всегда видимых страниц до и после текущей страницы.

// renderItem: Функция, которая отвечает за отображение элемента пагинации. 
// Она принимает параметры и возвращает компонент PaginationItem, который отображается как элемент пагинации.