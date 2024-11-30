import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;

export const AppContainer = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    padding: 1rem;
    margin: 1rem;
  }

  @media (max-width: 860px) {
    padding: 0.8rem;
    margin: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    margin: 0.5rem;
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 860px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
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
`;

export const SearchBar = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  @media (min-width: 860px) {
    width: 100%;
    max-width: 400px;
    font-size: 1rem;
  }

  @media (max-width: 860px) and (min-width: 480px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.4rem;
  }
`;
