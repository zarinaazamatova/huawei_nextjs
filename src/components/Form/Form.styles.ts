import styled from 'styled-components';

export const StyledForm = styled.form`
  .input-container {
    position: relative;
  }
  .input-container input {
    width: 100%;
    outline: none;
    padding: 0px 10px;
    border: 1px solid lightgray;
    border-radius: 5px;
    height: 35px;
    line-height: 35px;
  }
  .input-container input::placeholder {
    color: ${({ theme }) => theme.textColors.secondary};
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-family: ${({ theme }) => theme.fontFamily.arial[1]};
  }
  .input-container button {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    padding: 0;
    background-color: transparent;
    height: 100%;
    vertical-align: middle;
    &:hover {
      cursor: pointer;
    }
  }
`;
