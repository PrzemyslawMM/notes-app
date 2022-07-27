import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 150px;
  height: 300px;
  background: ${({ isEdit }) => (isEdit ? 'yellow' : 'darkcyan')};
  border-radius: 1rem;
  transition: background-color 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  text-align: center;
`;

export const InputTextNote = styled.textarea`
  width: 12ch;
  height: 300px;
  background: inherit;
  border-radius: 1rem;
  font-family: 'Montserrat', sans-serif;
  border: none;
  text-align: center;
  font-size: 1rem;
  resize: none;
`;

export const NumberOfChars = styled.p`
  align-self: flex-end;
`;

export const P = styled.p`
  max-width: 12ch;
`;
