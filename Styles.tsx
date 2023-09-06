import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  color: #000000;
  width: 375px;
`;

export const TopLayout = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row; 
  margin-top: 10px;
`;

export const Text = styled.Text`
  flex: 1;
  font-size: 24px; 
  font-weight: bold; 
  margin-left: 15px;
`;

export const MainContent = styled.View`
  flex: 5;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px; 
  width: 175px
`;

export const NotificationText = styled.Text`
  font-size: 12px;
  color: #979797;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  position: absolute;
  bottom: 10px;
  right: 10px;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #eaeaea;
  padding: 10px;
  border-radius: 25px;
`;

export const ButtonIcon = styled.Text`
  font-size: 18px; 
  font-weight: bold; 
  color: #333; 
  text-align: center;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: #F3F3F3;
  width: 100%;
  height: 50%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-items: flex-end;
`;

export const ModalTitle = styled.Text`
  text-align: center;
  font-weight: 600; 
  font-size: 16px; 
  margin-bottom: 30px;
`;

export const MedicineChoice = styled.View`
  margin-top: 10px;
  justify-content: space-between;
  flex-direction: row;
`;

export const TextLabel = styled.Text`
  font-size: 12px;
`;

export const QuantityChoice = styled.View`
  flex-direction: row;
  align-items: center;
  height: 65px;
  background-color: white;
`;

export const Icon = styled.View`
  width: 30px;
  justify-content: center;
  align-items: center;
`;

export const SaveButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px; 
  border-radius: 8px; 
  padding: 8px; 
  background-color: #000000;
  justify-content: center; 
  align-items: center;
`;


