import styled from "styled-components";

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #233129;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #fff !important;
  }

  input {
    flex: 1;
    border: 0;
    color: #f4ede8;

    background: transparent;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
