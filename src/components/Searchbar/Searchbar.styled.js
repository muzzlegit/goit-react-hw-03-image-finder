import styled from '@emotion/styled';

export const Header = styled.header({
  position: 'fixed',
  zIndex: '999',
  height: '6vh',
  width: '100%',
  gridArea: 'header',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: '1px solid rgba(255,255,255,.2)',
  backgroundColor: '#4b5c63',
});
export const Input = styled.input({
  padding: '2px 6px',
  width: '300px',
  height: '20px',
  borderRadius: '4px',
  outline: 'none',
});
export const Button = styled.button({
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  color: '#00ffba',
  '& :hover': {
    cursor: 'pointer',
  },
});
