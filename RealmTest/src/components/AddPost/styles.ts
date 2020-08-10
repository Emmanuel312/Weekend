import styled from 'styled-components/native';

export const Container = styled.View``;

export const InputView = styled.View``;

interface InputProps {
  error: boolean;
}

export const Input = styled.TextInput<InputProps>`
  background: #fff;
  margin-bottom: 10px;
  height: 50px;
  border-radius: 25px;
  padding: 0 20px;
  border-color: ${(props) => (props.error ? 'red' : '#fff')};
`;

export const AddButton = styled.TouchableOpacity`
  background: #44679e;
  margin: 20px 0;
  padding: 20px;
  align-items: center;
  border-radius: 30px;
`;

export const AddText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;
