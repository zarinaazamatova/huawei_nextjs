import styled from 'styled-components';

export const StyledPaymentAndDeliveryContainer = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.roboto[1]};
  width: 90%;
  margin: 150px auto;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
export const StyledDeliveryContainer = styled.div`
  margin-top: 30px;
`;
export const StyledOptionsContainer = styled.div`
  margin-top: 30px;
`;
export const StyledPaymentOptionsList = styled.ul`
  list-style: none;
  padding: 0;
`;
export const StyledPaymentRow = styled.li`
  margin-bottom: 20px;
  display: flex;

  a {
    color: ${({ theme }) => theme.textColors.orange};
    display: block;
    margin-top: 10px;
    font-size: ${({ theme }) => theme.fontSizes.base};
    text-decoration: none;
  }
  img {
    display: inline-block;
    margin-right: 10px;
  }
`;

export const StyledPaymentTitle = styled.div`
  min-width: 200px;
  margin-right: 20px;
  text-wrap: wrap;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
export const StyledPaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const StyledReturnOptionsContainer = styled.div`
  margin-top: 30px;
  a {
    color: ${({ theme }) => theme.textColors.orange};
    font-size: ${({ theme }) => theme.fontSizes.base};
    text-decoration: none;
  }
`;
