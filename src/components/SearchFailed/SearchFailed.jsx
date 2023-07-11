import React from 'react';
import searchFailedDesk from 'assets/images/desktop/search-failed-1x.webp';
import searchFailedDeskRet from 'assets/images/desktop/search-failed-2x.webp';
import searchFailedMob from 'assets/images/mobile/search-failed-1x.webp';
import searchFailedMobRet from 'assets/images/mobile/search-failed-2x.webp';
import { Description, Image } from './SearchFailed.styled';

const srcsetMob = `${searchFailedMob} 1x, ${searchFailedMobRet} 2x`;
const srcsetDesk = `${searchFailedDesk} 1x, ${searchFailedDeskRet} 2x`;

export const SearchFailed = () => {
  return (
    <>
      <Image>
        <source srcSet={srcsetDesk} media="(min-width: 768px)" />
        <source srcSet={srcsetMob} media="(max-width: 767px)" />
        <img src={searchFailedDesk} alt="Not found"></img>
      </Image>
      <Description>Try looking for something else..</Description>
    </>
  );
};
