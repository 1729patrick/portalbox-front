import styled from 'styled-components';

export const Container = styled.span`
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3px;

    label {
      font-weight: 500;
      font-size: 15px;
      color: #333;
    }

    button {
      font-weight: 500;
      color: rgb(239, 108, 0);
      border: none;
      white-space: nowrap;
      font-size: 15px;
      padding-bottom: 3px;
      border-bottom: 2px solid transparent;
      position: relative;

      &:hover {
        border-color: rgb(239, 108, 0);
      }

      input {
        cursor: pointer;
        position: absolute;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;

        &::-webkit-file-upload-button {
          cursor: pointer;
        }
      }
    }
  }

  img {
    max-width: ${props => props.maxWidthImage};
    border-radius: 6px;
    border: 1px solid #4444;
  }

  & + span {
    margin-top: 20px;
  }
`;
