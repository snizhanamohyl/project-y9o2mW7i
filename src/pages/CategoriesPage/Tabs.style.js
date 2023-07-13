import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export const CustomTabs = styled(props => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: 'var(--accent)',
  },
  '& .MuiTab-root': {
    paddingTop: '10px',
    paddingBottom: '32px',
    '@media (min-width: 768px)': {
      fontSize: 18,
      paddingBottom: '28px',
    },
  },
  '& .MuiTab-root:not(:last-child)': {
    marginRight: '28px',
    '@media (min-width: 768px)': {
      marginRight: '55px',
    },
  },
  '& .MuiTabs-scrollButtons': {
    display: 'none',

    '@media (min-width: 768px)': {
      backgroundColor: 'var(--accent)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '12px',
      width: '44px',
      height: '44px',
      '& .MuiSvgIcon-root': {
        fill: 'var(--bg-color)',
        width: '30px',
        height: '30px',
      },
    },
  },
}));

export const CustomTab = styled(Tab)(({ theme }) => ({
  display: 'inline-flex',
  minWidth: 'auto',

  fontFamily: 'inherit',
  textTransform: 'none',
  fontWeight: 400,
  fontSize: 14,
  lineHeight: 1,
  padding: 0,
  color: 'var(--placeholder-color)',
  '&.Mui-selected': {
    color: 'var(--accent)',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'var(--accent)',
  },
  '@media (min-width: 768px)': {
    fontSize: 18,
  },
}));

export const CustomConteiner = styled(Box)(({ theme }) => ({
  marginTop: '50px',
  '@media (min-width: 1440px)': {
    marginTop: '100px',
  },
}));

export const CustomBox = styled(Box)(({ theme }) => ({
  borderBottom: '1px solid var(--border-bottom-color)',
}));
