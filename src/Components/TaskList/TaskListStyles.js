import styled from "styled-components";

export const TaskListContainer = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 860px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const DraggableItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: grab;
`;

export const NoTasksMessage = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #888;
`;
