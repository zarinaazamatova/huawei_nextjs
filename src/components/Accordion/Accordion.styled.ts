import styled from 'styled-components';
import { LiaAngleDownSolid } from 'react-icons/lia';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  border: 0;
  background-color: white;
  color: grey;
  line-height: 1.6;
`;

export const StyledContent = styled.div`
  margin-left: 50px;
  width: 100%;
  text-align: justify;
`;

export const StyledIcon = styled(LiaAngleDownSolid)`
  margin-left: 5px;
`;

export const StyledTitle = styled.div`
  margin: 10px;
  font-weight: bold;
`;

export const StyledHeader = styled.div`
  display: flex;
`;

export const StyledSections = styled.div`
  margin: 10px 0;
`;
