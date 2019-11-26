import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #999;
`;

export const Input = styled.TextInput`
  flex: 1;
  background: #eee;
`;

export const SubmitButton = styled(RectButton)`
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background: #7159c1;
  border-radius: 4px;
`;

export const Text = styled.Text``;
