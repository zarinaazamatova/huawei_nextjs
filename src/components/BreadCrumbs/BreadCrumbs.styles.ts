import styled from 'styled-components';

export const StyledBreadCrumbsList = styled.ul`
  font-family: ${({ theme }) => theme.fontFamily.roboto[1]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  display: flex;
  list-style: none;
`;
export const StyledBreadCrumbsItem = styled.li`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textColors.darkGrey};
  }
`;
