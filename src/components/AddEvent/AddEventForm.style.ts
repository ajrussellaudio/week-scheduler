import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;

  & > label {
    grid-column: 1 / span 1;
  }

  & > input {
    grid-column: 2 / span 1;
  }

  & > input[type='checkbox'] {
    justify-self: start;
  }

  & > button {
    grid-column: 2 / span 1;
  }
`;
