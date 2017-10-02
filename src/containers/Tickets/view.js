import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TextInput, AppRegistry, TouchableOpacity, StyleSheet, KeyboardAvoidingView   } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Wrapper = styled.View`    
`;
const Buy = styled.Text`
   fontSize: 20;
   color: #ffffffff;
   text-align: center;
`;
const BuyView = styled.View`
    margin-top: 30;
    border-radius:30;
    background-color: #f15459ff;
    margin-horizontal: 60;
    padding-vertical: 10;
`;
const MailView = styled.View`
    margin-top: 10;
    justifyContent: flex-start;
    margin-horizontal: 50;
`;
const TextMail = styled.Text`
   fontSize: 10;
   color: #ffffffff;
`;
const InputLineView = styled.View`
    border-radius:30;
    background-color: #ffffffff;
    margin-horizontal: 40;
    margin-top: 10;
`;
const InfoFilmsColumnLeft = styled.View`
    flex-direction: column;
    margin-left: 10;
`;
const InfoFilmsColumnRight = styled.View`
    flex-direction: column;
    margin-left: 10;
`;
const InfoColumnRight = styled.View`
    flex-direction: column;
    margin-left: 30;
`;
const InfoStringTop = styled.View`
    flex-direction: row;
    margin-top: 15;
`;
const InfoStringBottom = styled.View`
    flex-direction: row;
    margin-top: 15;
    margin-bottom: 40;
`;
const InAllView = styled.View`
   background-color: #ffffffff;
   margin-horizontal: 80;
`;
const InAllText = styled.Text`
    font-size: 20;
    color: #000;
    text-align: center;
`;
const InAllPriceText = styled.Text`
    font-size: 30;
    color: #a6acb6ff;
    text-align: center;
`;
const InputLineSet = styled.View`
    margin-top: 10;
`;
const CircleView = styled.View`
    flex-direction: row;
    margin-horizontal: 80;
    background-color: #ffffffff;
    justifyContent: space-between;
`;
const LargeCircleLeft = styled.View`
    width: 10px;
    height: 20px;
    background-color: #0d1927ff;
`;
const LargeCircleRight = styled.View`
    width: 10px;
    height: 20px;
    border-radius: 3;
    background-color: #0d1927ff;
`;
const SmallCircle = styled.View`
    margin-top: 7;
    width: 5;
    height: 5;
    background-color: #0d1927ff;
    justifyContent: space-between;
`;
const ImageStyle = styled.Image`
   width: 100%;
   height: 100%;
   position: absolute;
`;
const ContainerTicket = styled.View`  
   margin-top: 30;
   background-color: #ffffffff;
   margin-horizontal: 80; 
`;
const TextOrder = styled.Text`
   margin-top: 20;
   fontSize: 15;
   color: #ffffffff;
   text-align: center;
`;
const TextTicket = styled.Text`
   fontSize: 12;
   color: #000;
`;
const OnPressView = styled.TouchableOpacity`
   height: 80px;
`;
const styles= StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        height: 30,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        marginHorizontal: 30,
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        margin: 5,
        padding: 5,
        fontSize: 14,
        fontFamily: 'lightItalic',
    },
    twit: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 10,
    }
})
const imgUri = [
    require('../../img/layer_5.png'),
    require('../../img/layer_4.png'),
    require('../../img/calendar.png'),
    require('../../img/arrow-down.png'),
    require('../../img/layer_ticket.png'),
];

const TicketsView = ({selectedDate, selectedTime, checkInputUserData}):Props => {

    console.log('TicketsView selectedDate', selectedDate);
    return (

            <ImageStyle source={imgUri[0]} resizeMode="cover" >
        <Wrapper>
                <TextOrder>Ваше замолення</TextOrder>
                   <ContainerTicket>
                     <InfoStringTop>
                       <InfoFilmsColumnLeft>
                           <TextTicket>Фільм:</TextTicket>
                           <TextTicket>Кынотеатр:</TextTicket>
                           <TextTicket>Сеанс:</TextTicket>
                       </InfoFilmsColumnLeft>
                       <InfoFilmsColumnRight>
                           <TextTicket>Форсаж 8</TextTicket>
                           <TextTicket>Хмельницький Oasis</TextTicket>
                           <TextTicket>2D, {selectedDate.dateString} {selectedTime} </TextTicket>
                       </InfoFilmsColumnRight>
                     </InfoStringTop>
                       <InfoStringBottom>
                         <InfoFilmsColumnLeft>
                             <TextTicket>Квитки:</TextTicket>
                         </InfoFilmsColumnLeft>
                           <InfoColumnRight>
                               <TextTicket>ряд 3, мсце 11, ціна 45 грн</TextTicket>
                               <TextTicket>ряд 3, мсце 12, ціна 45 грн</TextTicket>
                               <TextTicket>ряд 3, мсце 13, ціна 45 грн</TextTicket>
                               <TextTicket>ряд 3, мсце 14, ціна 45 грн</TextTicket>
                           </InfoColumnRight>
                       </InfoStringBottom>
                   </ContainerTicket>
                      <CircleView>
                          <LargeCircleLeft/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                              <SmallCircle/>
                          <LargeCircleRight/>

                      </CircleView>
                            <InAllView>
                                <InAllText>Всього:</InAllText>
                                <InAllPriceText>180 грн</InAllPriceText>
                            </InAllView>
                         <InputLineSet>
                            <InputLineView>
                                <TextInput
                                    style={styles.input}
                                    editable={true}
                                    onChangeText={(checkInputUserData) => ({checkInputUserData})}
                                    placeholder='Ваше імʼя'
                                    //ref='username'
                                    returnKeyType='next'
                                    value={checkInputUserData}
                                    underlineColorAndroid={"transparent"}
                                />
                             </InputLineView>
                                <InputLineView>
                                <TextInput
                                    style={styles.input}
                                    editable={true}
                                    onChangeText={(checkInputUserData) => ({checkInputUserData})}
                                    placeholder='Ваш номер телефону'
                                    returnKeyType='next'
                                    value={checkInputUserData}
                                    underlineColorAndroid={"transparent"}
                                />
                                </InputLineView>
                             <InputLineView>
                                 <TextInput
                                     style={styles.input}
                                     editable={true}
                                     onChangeText={(checkInputUserData) => ({checkInputUserData})}
                                     placeholder='Email для отримання коду замовлення'
                                     returnKeyType='next'
                                     value={checkInputUserData}
                                     underlineColorAndroid={"transparent"}
                                 />
                             </InputLineView>
                            </InputLineSet>
                        <MailView>
                         <TextMail>
                            На вказаний email Ви отримаєте повідомлення з деталями замовлення,
                            кодом бронювання та квитками.
                        </TextMail>
                        </MailView>
                        <OnPressView onPress={
                            () => {Actions.payment({
                                date: selectedDate,
                                time: selectedTime,
                              })
                            }}
                        >
                    <BuyView>
                        <Buy>Купити</Buy>
                    </BuyView>
                        </OnPressView>
                </Wrapper>
            </ImageStyle>
    )
};
export default TicketsView;