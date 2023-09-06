import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #e7f9f3;
  padding: 10px;
`;

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Navigation = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const FlagContainer = styled.div`
  position: absolute;
  right: 20px;
`;

export const Flag = styled.div`
  cursor: pointer;
`;
