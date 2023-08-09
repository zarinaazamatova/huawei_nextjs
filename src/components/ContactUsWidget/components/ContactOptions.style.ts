import styled from 'styled-components';

export const StyledContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 4%;
  right: 10%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 230px;
  max-height: 70vh;
  padding: 10px;
  border-radius: 5px;

  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  z-index: 1;

  overflow-y: hidden;
  transition: all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  @media (max-width: 645px) {
    width: 100vw;
    height: 70%;

    bottom: 0px;
    right: 0px;

    font-weight: 900;
    font-size: 20px;
  }
`;

export const StyledHeader = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 110%;
  color: #000000;

  cursor: context-menu;
`;

export const StyledLink = styled.a`
  font-size: 17px;
  font-weight: 600;

  color: #000000;
  text-decoration: none;
`;

export const SttyledList = styled.li`
  display: flex;
  flex-direction: row;

  margin-bottom: 8px;
`;

export const StyledImage = styled.div`
  display: inline-block;

  margin-right: 5px;
  margin-bottom: 10px;
  padding: 10px;

  border-radius: 25px;
  background-color: transparent;
`;
