import styled from 'styled-components';

export const AuthorizationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Title = styled.div``;

export const PasswordField = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  margin-bottom: 10px;
`;

export const Error = styled.p`
  position: absolute;
  text-align: end;

  font-size: 14px;
  margin: 0;
  top: 100%;
  right: 5px;

  color: red;
`;
