import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
`;

export const LeftAside = styled.aside`
  width: calc(25% - 50px);
  position: fixed;
  height: 100%;
  overflow: hidden;

  > div {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
  }
`;

export const RigthAside = styled.aside`
  margin-left: auto;
  width: 75%;
  padding-top: 58px;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
`;

export const Route = styled(NavLink)`
  border: none;
  background: transparent;
  font-weight: 500;
  color: #666;
  margin-bottom: 20px;
  text-align: left;
  font-size: 15px;
  padding: 12px 0;

  &.active {
    background: #e8e8e8;
    color: rgb(239, 108, 0);
    width: 75%;
    border-radius: 4px 50px 50px 4px;
  }
`;

export const Card = styled.div`
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 30px 6px rgba(31, 51, 73, 0.1);
  padding: 60px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  & + div {
    margin-top: 30px;
  }
`;
