import styled from 'styled-components';

export const StyledHeader = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
export const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-spacing: 10px 20px;
`;
export const StyledTableRow = styled.tr``;
export const StyledTableHead = styled.th`
  color: ${({ theme }) => theme.textColors.lightGrey};
  :nth-child(3) {
    width: 30%;
  }
  text-align: left;
`;
export const StyledTableData = styled.td`
  a {
    color: ${({ theme }) => theme.textColors.orange};
    text-decoration: none;
  }
  text-align: left;
  vertical-align: top;
  font-size: 13px;
  line-height: 15px;
`;
export const StyledTableDataTitle = styled.td`
  font-weight: bold;
  text-align: left;
  vertical-align: top;
`;
