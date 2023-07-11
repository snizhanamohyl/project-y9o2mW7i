import React from 'react';
import searchFailed from 'assets/images/desktop/search-failed-1x.webp';
import { Description, Image } from './SearchFailed.styled';

export const SearchFailed = () => {
  return (
    <>
      <Image src={searchFailed} alt="Not found"></Image>
      <Description>Try looking for something else..</Description>
    </>
  );
};
