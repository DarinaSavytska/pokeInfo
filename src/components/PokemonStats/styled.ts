import styled from 'styled-components';

export const AllStatsContainer = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50px;
`;

export const StatsTitle = styled.p`
  background-color: yellowgreen;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 10px;
`;

export const Stat = styled.div`
  display: flex;
  justify-content: space-between;
`;
