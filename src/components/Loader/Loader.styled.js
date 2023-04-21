import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const iconSpin = keyframes`
  0% {
    transform: rotate(0deg) ;
      scale:0.4 ;
  }
   100% {
    transform: rotate(360deg);
    scale: 1;
  }
  `;

export const List = styled.ul({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  justifyContent: 'center',
  alignContent: 'center',
  gridGap: '30px',
});
export const Item = styled.li({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '1rem',
  width: '100%',
  height: '260px',
  backgroundColor: '#4b5c63',
});
export const Spiner = styled.div({
  color: '#00ffba',
  animation: `${iconSpin} 2s infinite `,
});
