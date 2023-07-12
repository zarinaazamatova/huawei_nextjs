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
      display: inline-block;
      text-align: center;
      margin: 0 5px;
      cursor: pointer;
      list-style-type: none;
      position: relative;
      height: 34px;
      font-family: 'Roboto', sans-serif;
      line-height: 32px;
      font-weight: ${theme.fontWeights.light};
      font-size: ${theme.fontSizes.md};
    `}
    a {
      padding: 10px;
      text-decoration: none;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
    &.active a {
      ${({ theme }) => css`
        border-color: ${theme.bgColors.orange};
        color: ${theme.textColors.orange};
      `}
    }
  }
`;
