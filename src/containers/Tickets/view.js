import React from 'react';
import styled from 'styled-components/native';
import { Text, View, ListView  } from 'react-native';

const Wrapper = styled.View`
    flex: 1;
`;
const Buy = styled.Text`
   fontSize: 20;
   color: #ffffffff;
   text-align: center;
`;
const BuyView = styled.View`
    border-radius:30;
    background-color: #f15459ff;
    margin-horizontal: 80;
    padding-vertical: 10;
    
`;
const InputLine = styled.Text`
   fontSize: 8;
   color: #000;
   text-align: center;
`;
const TextMail = styled.Text`
   fontSize: 8;
   color: #ffffffff;
   text-align: center;
`;
const InputLineView = styled.View`
    border-radius:30;
    background-color: #ffffffff;
    margin-horizontal: 80;
    padding-vertical: 15;
`;
const InputLineSet = styled.View`
   flex: 1;
   flexDirection: column;
   justify-content: space-between;
   
`;
const ImageStyle = styled.Image`
   width: 100%;
   height: 100%;
   position: absolute;
`;
const ImageTicket = styled.Image`
   width: 100%;
   height: 100%;
   position: absolute;
`;
const ContainerTicket = styled.View`
   flex: 1;
   flex-direction: column;
   background-color: red;
`;
const TextOrder = styled.Text`
   fontSize: 15;
   color: #ffffffff;
   text-align: center;
`;
const TextTicket = styled.Text`
   fontSize: 10;
   color: #000;
   text-align: center;
   
`;
const imgUri = [
    require('../../img/layer_5.png'),
    require('../../img/layer_4.png'),
    require('../../img/calendar.png'),
    require('../../img/arrow-down.png'),
    require('../../img/layer_ticket.png'),
];
const leftText = ["Фильм", "Кінотеатр", "Сеансы"];

const TicketsView = ():Props => {

    return (
        <Wrapper>
            <ImageStyle source={imgUri[0]} resizeMode="cover" />
            <TextOrder>Ваше замолення</TextOrder>
               <ContainerTicket>
                  <ImageTicket source={imgUri[4]}/>
                   <TextTicket>{leftText}</TextTicket>

               </ContainerTicket>
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
                    <TextMail>
                        На вказаний email Ви отримаєте повідомлення з деталями замовлення,
                        кодом бронювання та квитками.
                    </TextMail>
            <BuyView>
                <Buy>Купити</Buy>
            </BuyView>
        </Wrapper>
    )
};
export default TicketsView;