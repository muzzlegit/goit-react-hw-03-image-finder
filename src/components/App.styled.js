import styled from '@emotion/styled';

export const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  ridTemplateRows: '1fr',
  gridTemplateAreas: `
  'header'
  'content'
  `,
});
