import styled from '@emotion/styled';

export const ButtonComponent = styled.button({
  margin: '2rem auto 0 auto',
  height: '30px',
  minWidth: '160px',
  fontSize: '18px',
  border: 'none',
  borderLeft: '1px solid rgba(255,255,255, .3)',
  borderTop: '1px solid rgba(255,255,255, .3)',
  borderRadius: '4px',
  backgroundColor: '#4b5c63',
  boxShadow: '6px 6px 11px -3px rgba(0,0,0,0.75)',
  color: 'white',
  transition: 'box-shadow 400ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    cursor: 'pointer',
    color: '#00ffba',
    boxShadow: '6px 6px 11px -3px rgba(0, 255, 186, .6)',
    backgroundColor: '#4b5c63',
  },
  '&:disabled': {
    color: 'grey',
    boxShadow: 'none',
  },
});
