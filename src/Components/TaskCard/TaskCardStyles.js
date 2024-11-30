import styled from "styled-components";

export const Card = styled.div`
  padding: 1rem;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 1rem;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 860px) {
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;

export const Input = styled.input`
  padding: 0.4rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.4rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 0.5rem;
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &.edit {
      background: #007bff;
      color: white;
    }

    &.delete {
      background: #dc3545;
      color: white;
    }

    &.save {
      background: #007bff;
      color: white;
    }
    &.cancel {
      background: #dc3545;
      color: white;
    }
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;
