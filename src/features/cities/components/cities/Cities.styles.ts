import styled, { css } from 'styled-components';

export const StyledModalOverlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    display: isOpenCities? flex : none;
    align-items: center;
    justify-content: center;
    padding: 40px 40px 40px 50px;
    background-color: ${theme.backgroundColors.modalBg};
    z-index: 2023;
  `}
`;

export const StyledModal = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 800px;
    background-color: ${theme.backgroundColors.primary};
    padding: 20px;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: ${theme.textColors.darkGrey};
  `}
`;

export const StyledWithIcon = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const StyledCitiesBlock = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    padding: 0 10px;

    .my-city.active {
      color: ${theme.textColors.primary};
      font-weight: ${theme.fontWeights.medium};
      font-size: ${theme.fontSizes.base};
    }
  `}
`;

export const StyledGroupOfCitites = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    padding: 10px 20px;
    font-size: ${theme.fontSizes.l};
    font-weight: ${theme.fontWeights.bold};
    text-align: left;
    color: ${theme.textColors.secondary};
    cursor: pointer;

    .tab.active {
      color: ${theme.textColors.primary};
      font-weight: ${theme.fontWeights.bold};
      font-size: ${theme.fontSizes.l};
    }
  `}
`;
