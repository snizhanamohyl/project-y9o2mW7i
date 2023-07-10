import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export const CustomTabs = styled(props => <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />)(
  ({ theme }) => ({
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
      fontFamily: 'inherit',
      textTransform: 'none',
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1,
      paddingTop: '10px',
      paddingBottom: '28px',
    },
    '& .MuiTab-root:not(:last-child)': {
      marginRight: '55px',
    },
    '& .MuiTabs-scrollButtons': {
      backgroundColor: 'var(--accent)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '12px',
      width: '44px',
      height: '44px',
      '& .MuiSvgIcon-root': {
        fill: 'var(--bg-color)',
        width: '25px',
        height: '25px',
      },
    },
  })
);

export const CustomTab = styled(Tab)(({ theme }) => ({
  fontWeight: 400,
  fontSize: 18,
  padding: 0,
  color: 'var(--placeholder-color)',
  '&.Mui-selected': {
    color: 'var(--accent)',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'var(--accent)',
  },
}));

export const CustomConteiner = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: '100px',
}));

export const CustomBox = styled(Box)(({ theme }) => ({
  borderBottom: '1px solid var(--border-bottom-color)',
  marginBottom: '50px',
}));
