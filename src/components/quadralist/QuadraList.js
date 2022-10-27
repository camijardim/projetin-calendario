import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Button } from 'react-native';
import SelectList from 'react-native-dropdown-select-list';

const [selected, setSelected] = React.useState("");

  const data = [
    {key:'1',value:'Quadra Futsal'},
    {key:'2',value:'Quadra Society'},
    {key:'3',value:'Quadra de Areia'},
  ];


const QuadraList = () =>{

    return(
        <View>
            <SelectList 
            setSelected={setSelected} 
            data={data}  
            search={false} 
            boxStyles={{borderRadius:0}} 
            defaultOption={{ key:'1',value:'Quadra Futsal' }}/> 

            <Button 
            title= "Confirmar"
            />
        </View>
    )
}  

export default QuadraList;