import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 150px;
`;

export const ControleContainer = styled.div``;

export const ControlInfo = styled.p``;

export const ControleElements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PokemonContainer = styled.div`
  margin-left: 30px;
`;

export const PokemonName = styled.p``;

export const PokemonImgContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const PokemonImg = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
