import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 25em;

  > div {
    p {
      color: ${props => props.theme.headerFilter.neighborhood.city.color};
      font-weight: 500;
      margin: 10px 0 10px;
    }

    span {
      display: flex;
      flex-direction: column;
    }
  }
`;
