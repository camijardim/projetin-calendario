import React, { useContext }  from 'react';
import { View,  Button, Text} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import { AgendaContext} from '../Agenda/Agenda';

const data = [
  {key:'1',value:'Quadra Futsal'},
  {key:'2',value:'Quadra Society'},
  {key:'3',value:'Quadra de Areia'},
];

const QuadraList = () =>{
  const [selected, setSelected] = React.useState("");

    return(
        <View style={{paddingHorizontal:20, paddingVertical:300, flex:1}}>
            <SelectList
            setSelected={setSelected} 
            data={data}  
            search={false} 
            boxStyles={{borderRadius:0}} 
            defaultOption={{ key:'1',value:'Quadra Futsal' }}/> 
            <Text></Text>
            <Text></Text>

            <Button
            type="submit" 
            title= "Confirmar"
            onPress={AgendaContext}
            />
        </View>
    )
}  

export default QuadraList;