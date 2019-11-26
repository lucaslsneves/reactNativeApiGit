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
  color: #333;
`;

export const SubmitButton = styled(RectButton)`
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  opacity: ${props => (props.loading ? 0.6 : 1)};
  background: #7159c1;
  border-radius: 4px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0px 20px 30px;
`;
export const Avatar = styled.Image.attrs({
  numberOfLines: 2,
})`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background: #eee;
`;
export const Name = styled.Text`
  margin-top: 4px;
  text-align: center;
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

export const Bio = styled.Text`
  margin-top: 2px;
  font-size: 13px;
  text-align: center;
  color: #999;
`;
export const ProfileButton = styled(RectButton)`
  margin-top: 5px;
  align-self: stretch;
  background: #7159c1;
  border-radius: 4px;
`;
export const ProfileButtonText = styled.Text`
  text-align: center;
  padding: 10px 0;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
`;
