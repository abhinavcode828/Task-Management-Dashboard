import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.4rem;
  font-size: 1.1rem;
`;

export const Input = styled.input`
  padding: 0.6rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1.05rem;
  width: 100%;
  box-sizing: border-box;
`;

export const DateInputWrapper = styled.div`
  position: relative;

  & input[type="date"] {
    appearance: none;
    padding: 0.6rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1.05rem;
    width: 100%;
    box-sizing: border-box;
  }

  & input[type="date"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.6rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1.05rem;
  resize: none;
`;

export const Select = styled.select`
  padding: 0.6rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1.05rem;
`;

export const Button = styled.button`
  padding: 0.6rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.05rem;

  &:hover {
    background: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.4rem;
  }
`;
