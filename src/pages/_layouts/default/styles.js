import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;

  section {
    padding-top: ${props => (props.simple ? '125px' : '175px')};
  }
`;
