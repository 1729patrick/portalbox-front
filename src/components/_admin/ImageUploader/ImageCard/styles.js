import styled from 'styled-components';

export const Card = styled.div`
  cursor: move;
  border: 1px dashed transparent;
  transition: 300ms;
background: #fff;

  &:hover {
    border-color: rgb(239, 108, 0);
  }
`;

export const Image = styled.div`
  background: ${props => `url('${props.source}')`} center no-repeat;
  background-size: cover;
  height: 300px;
`;
