import React from 'react';
import styled from 'styled-components/native';
import { Text, View, ListView  } from 'react-native';

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
const InputLine = styled.Text`
   fontSize: 12;
   color: #000;
   margin-vertical: 10;
   margin-left: 20;
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
const ImageTicket = styled.Image`
   width:  200;
   height: 400;  
`;
const ContainerTicket = styled.View`  
   margin-top: 30;
   background-color: #ffffffff;
   margin-horizontal: 80; 
`;
const TextOrder = styled.Text`
   margin-top: 30;
   fontSize: 15;
   color: #ffffffff;
   text-align: center;
`;
const TextTicket = styled.Text`
   fontSize: 12;
   color: #000;
`;

const imgUri = [
    require('../../img/layer_5.png'),
    require('../../img/layer_4.png'),
    require('../../img/calendar.png'),
    require('../../img/arrow-down.png'),
    require('../../img/layer_ticket.png'),
];
const leftText = ("Фильм, Кінотеатр, Сеансы");

const TicketsView = (selectedDate):Props => {
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
                           <TextTicket>2D,{selectedDate.dateString} </TextTicket>
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
                                <InputLine>
                                    Ваше ім'я
                                </InputLine>
                             </InputLineView>
                                <InputLineView>
                                 <InputLine>
                                     Ваш номер телефону
                                 </InputLine>
                                </InputLineView>
                             <InputLineView>
                               <InputLine>
                                    Email для отримання коду замовлення
                               </InputLine>
                             </InputLineView>
                            </InputLineSet>
                        <MailView>
                         <TextMail>
                            На вказаний email Ви отримаєте повідомлення з деталями замовлення,
                            кодом бронювання та квитками.
                        </TextMail>
                        </MailView>
                    <BuyView>
                        <Buy>Купити</Buy>
                    </BuyView>
                </Wrapper>
            </ImageStyle>
    )
};
export default TicketsView;