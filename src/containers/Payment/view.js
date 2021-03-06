import React from 'react';
import styled from 'styled-components/native';
import {
  Text,
  View,
  ListView,
  TextInput,
  StyleSheet,
  Span,
  ScrollView
} from 'react-native';
import { Action } from 'react-native-router-flux';
import MenuNumbers from '../../components/menuNumbers';

const Wrapper = styled.View`
  flex: 1;
  background-color: #0d1a27ff;
`;
const Row = styled.View`
  background-color: #ffffffff;
  margin-top: 40;
  margin-horizontal: 50;
  border-radius: 5;
  justify-content: space-between;
  flex-direction: column;
`;
const Forma = styled.Image`
  width: 20;
  height: 30;
`;
const Shape = styled.Image`
  width: 20;
  height: 25;
`;
const ShapeInfo = styled.Image`
  width: 20;
  height: 30;
`;
const ShapeText = styled.Text`
  fontFamily: SF-UI-Display-Semibold;
  margin-left: 10;
  color: #000;
  fontSize: 15;
`;
const InfoViewIcon = styled.View`
  flex-direction: row;
  margin-top: 15;
`;
const InfoViewText = styled.View``;
const Next = styled.Text`
  fontFamily: SFUIDisplay-Medium;
  fontSize: 15;
  color: #ffffffff;
  text-align: center;
`;
const NextView = styled.View`
  margin-bottom: 30;
  border-radius: 30;
  background-color: #f15459ff;
  width: 250;
  height: 32;
  justify-content: center;
  margin-horizontal: 30;
`;
const CardImage = styled.Image`
  width: 100%;
  height: 30;
`;
const CardImageView = styled.View`
  margin-top: 20;
  margin-bottom: 10;
`;
const ImageStyle = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const HeadLine = styled.Text`
  fontFamily: SFUIDisplay-Bold;
  margin-top: 25;
  fontSize: 20;
  color: #000;
  text-align: center;
`;
const CvvView = styled.View``;
const PeriodView = styled.View``;
const Period = styled.Text`
  fontFamily: SF-UI-Display-Semibold;
  color: #9ba2adff;
`;
const PeriodInput = styled.View`
  border-width: 1;
  border-radius: 20;
  border-color: #9ba2adff;
  margin-top: 2;
  height: 26;
  flex-direction: row;
`;
const PeriodInputView = styled.View`
  margin-left: 30;
  margin-top: 10;
  flex-direction: row;
`;
const ContainerPeriod = styled.View`
  justify-content: center;
  width: 50;
  height: 34;
  padding-bottom: 8;
`;
const CVV = styled.Text`
  color: #9ba2adff
  padding-horizontal: 10;
`;
const HeadLineView = styled.View`
  margin-top: 30;
  margin-left: 30;
`;
const CardLineView = styled.View``;
const imgUri = [
  require('../../img/layer_5.png'),
  require('../../img/shape_2.png'),
  require('../../img/forma_1.png'),
  require('../../img/shape_1.png'),
  require('../../img/card.png'),
  require('../../img/shape-2-copy.png')
];
const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    height: 30,
    borderColor: '#9ba2adff',
    marginHorizontal: 30,
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    margin: 10,
    padding: 5,
    fontSize: 14,
    fontFamily: 'lightItalic',
    borderRadius: 20
  },
  inputCvv: {
    height: 25,
    borderColor: '#9ba2adff',
    marginHorizontal: 10,
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    margin: 5,
    padding: 5,
    fontSize: 14,
    fontFamily: 'lightItalic',
    borderRadius: 20
  },
  twit: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  text: {
    fontSize: 10,
    alignSelf: 'center',
    color: 'red'
  }
});

const PaymentView = ({ selectedDate, selectedTime, pay }): Props => {
  return (
    <Wrapper>
      <ImageStyle source1={imgUri[0]} />
      <Row>
        <HeadLine>Платіжна інформація</HeadLine>
        <HeadLineView>
          <InfoViewIcon>
            <Shape source={imgUri[1]} resizeMode="contain" />
            <InfoViewText>
              <ShapeText>ID платежа</ShapeText>
              <ShapeText>2edb39f8f0064259be272554cbfda11f</ShapeText>
            </InfoViewText>
          </InfoViewIcon>
          <InfoViewIcon>
            <Forma source={imgUri[2]} resizeMode="contain" />
            <InfoViewText>
              <ShapeText>Всього до оплаты</ShapeText>
              <ShapeText>{pay} грн</ShapeText>
            </InfoViewText>
          </InfoViewIcon>
          <InfoViewIcon>
            <ShapeInfo source={imgUri[3]} resizeMode="contain" />
            <InfoViewText>
              <ShapeText>Інформація платіжної карти</ShapeText>
            </InfoViewText>
          </InfoViewIcon>
        </HeadLineView>
        <CardLineView>
          <TextInput
            style={styles.input}
            editable={true}
            //onChangeText={checkInputName}
            placeholder="         XXXX XXXX XXXX XXXX"
            returnKeyType="next"
            //onSubmitEditing={() => this.telephonInput.focus()} /* переходит по фокусу на следю поле ref=*/
            underlineColorAndroid={'transparent'}
            keyboardType="numeric"
          />
        </CardLineView>
        <PeriodInputView>
          <PeriodView>
            <Period>Строк дії до:</Period>

            <PeriodInput>
              <ContainerPeriod>
                <MenuNumbers />
              </ContainerPeriod>
              <ContainerPeriod>
                <MenuNumbers />
              </ContainerPeriod>
            </PeriodInput>
          </PeriodView>

          <CvvView>
            <CVV>CVV2/CVC2</CVV>
            <TextInput
              style={styles.inputCvv}
              editable={true}
              underlineColorAndroid={'transparent'}
              placeholder="    XXX"
              keyboardType="numeric"
            />
          </CvvView>
        </PeriodInputView>
        <CardImageView>
          <CardImage source={imgUri[4]} resizeMode="cover" />
        </CardImageView>
        <NextView>
          <Next>Оплатити</Next>
        </NextView>
      </Row>
    </Wrapper>
  );
};
export default PaymentView;
