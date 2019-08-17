import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;

  section {
    padding-top: ${props => (props.simple ? '125px' : '165px')};
  }

  @media screen and (max-width: 768px) {
    section {
      padding-top: ${props => (props.simple ? '105px' : '145px')};
    }
  }
`;
