import React, { useContext }  from 'react';
import { View,  Button, Text, ScrollView} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';



LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Marc', 'Abril', 'Maio', 'Jun', 'Jul.', 'Agos', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Terc', 'Quar.', 'Quin', 'Sex', 'Sab'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'br';


const horarios = [
  {key:'1',value:'10h - 11h'},
  {key:'2',value:'11h - 12h'},
  {key:'3',value:'12h - 13h'},
];

const data = [
  {key:'1',value:'Quadra Futsal'},
  {key:'2',value:'Quadra Areia'},
  {key:'3',value:'Quadra Society'},
];



const QuadraList = () =>{

  const [selected, setSelected] = React.useState("");


    return(
    <View style={{paddingHorizontal:20, paddingVertical:25, flex:1}}>
      <Calendar style={{borderRadius: 10, elevation: 2, margin:5}}
        onDayPress={day => {
          console.log('Dia Selecionado', day);
        }}
        onDayLongPress={day => {
          console.log('Dia Selecionado', day);
        }}

        enableSwipeMonths={true}
      />
      <Text></Text>
          <SelectList
            paddingHorizontal={20}
            flex = {1}
            setSelected={setSelected}
            data={data}
            search={false}
            boxStyles={{ borderRadius: 0 }}
            defaultOption={{ key: '1', value: 'Quadra Futsal' }} />
          <Text></Text>
          <SelectList
            paddingHorizontal={20}
            flex = {1}
            setSelected={setSelected}
            data={horarios}
            search={false}
            boxStyles={{ borderRadius: 0 }}
            defaultOption={{ key: '1', value: '10h - 11h' }} />
          <Text></Text>
          <Button
            type="submit"
            title="Confirmar"/>
    </View>
    )
}  

export default QuadraList;