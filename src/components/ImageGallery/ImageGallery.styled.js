import styled from '@emotion/styled';

export const Container = styled.div({
  margin: '8vh auto 20px auto',
  minHeight: '90vh',
  width: '1400px',
  gridArea: 'content',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
export const List = styled.ul({
  marginTop: '.5rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  justifyContent: 'center',
  alignContent: 'center',
  gridGap: '30px',
});
export const EmptyBox = styled.div({
  color: 'orange',
  fontSize: '20px',
});
