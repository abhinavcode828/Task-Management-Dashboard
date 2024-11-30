import styled from "styled-components";

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;

  @media (min-width: 860px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: 860px) and (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
  }

  select {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    width: auto;

    @media (max-width: 860px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      padding: 0.4rem;
    }
  }
`;
