import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledSpinnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0%;
  padding-bottom: 100%;
`;

export const StyledSpinnerIcon = styled(FaSpinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  color: ${({ theme }) => theme.textColors.orange};
  z-index: 2;

  animation: ${rotate} 2s linear infinite;
`;
