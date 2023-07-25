import styled, { css } from 'styled-components';
import ReactPaginate from 'react-paginate';

export const StyledPaginationContainer = styled(ReactPaginate)`
   {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    ${({ theme }) => css`
      position: relative;
      display: inline-block;
      height: 34px;
      margin: 0 5px;
      font-family: 'Roboto', sans-serif;
      font-weight: ${theme.fontWeights.light};
      font-size: ${theme.fontSizes.md};
      text-align: center;
      line-height: 32px;
      list-style-type: none;
      cursor: pointer;
    `}
    a {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
      text-decoration: none;
    }
    &.active a {
      ${({ theme }) => css`
        border-color: ${theme.backgroundColors.orange};
        color: ${theme.textColors.orange};
      `}
    }
  }
`;
