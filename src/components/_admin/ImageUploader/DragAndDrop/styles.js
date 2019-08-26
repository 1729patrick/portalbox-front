import styled from 'styled-components';

export const Images = styled.aside`
    padding: 245px 60px 60px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-template-rows: repeat(2, 1fr);
    overflow-y: hidden;
    grid-gap: 15px;
    z-index: 1;


    > div {
      min-width: 260px;
      max-width: 360px;
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      margin: 0.5%;
      position: relative;
      box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);

      > svg {
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
      }

      span {
        display: flex;
        border-top: 1px solid #ccc;

        align-items: center;
        position: relative;

        textarea {
          height: 47px;
          flex: 1;
          padding: 21px 8px 0px;
          color: #333;
          border: none;
        }

        p {
          position: absolute;
          padding: 5px 10px;
          background: #eee;
          border-radius: 50px;
          font-weight: 500;
          font-size: 13px;
          color: #333;
          top: -15px;
          left: 8px;
          border: 1px solid #d5d5d5;
          display: flex;
          align-items: center;

          svg {
            margin-right: 5px;
          }
        }
    }
`;
