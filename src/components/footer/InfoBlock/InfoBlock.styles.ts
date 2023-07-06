import styled from 'styled-components';

export const StyledInfoBlockWrapper = styled.div`
  color: ${({ theme }) => theme.textColors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.base};
  margin-bottom: 30px;
  p {
    margin-top: 0;
  }

  div {
    display: flex;
  }
  a > img[alt='visa-card-logo'],
  a > img[alt='master-card-logo'] {
    display: inline-block;
    margin-right: 10px;
  }
`;
