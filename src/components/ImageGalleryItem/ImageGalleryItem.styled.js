import styled from '@emotion/styled';

export const Item = styled.li({});
export const ItemImage = styled.img({
  width: '100%',
  height: '246px',
  objectFit: 'cover',
  scale: '1',
  borderLeft: '1px solid rgba(255,255,255,.2)',
  borderTop: '1px solid rgba(255,255,255,.2)',
  backgroundColor: '#4b5c63',
  boxShadow: '10px 10px 22px -3px rgba(0,0,0,0.75)',
  transition:
    'scale 400ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 400ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    boxShadow: 'none',
    cursor: 'pointer',
    scale: '1.1',
  },
});
