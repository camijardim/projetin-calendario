import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_API = 'http://localhost:3001/';


export default {
    listAllHorarios: async () => {
        const req = await fetch(`${BASE_API}/horarios`, {
            method:'GET',
            headers:{
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const res = await req.json();
        return res;
    },
    listAllQuadras: async () => {
        const req = await fetch(`${BASE_API}/quadras`, {
            method:'GET',
            headers:{
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const res = await req.json();
        return res;
    },
    agendaQuadra: async (id, horario, nomeQuadra, dia) => {
        let details = {
            'id': id,
            'horario': horario,
            'nomeQuadra': nomeQuadra,
            'dia': dia
        };
        let formBody = [];
        for (let property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        const req = fetch(`${BASE_API}/horarios`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        });

    fetch('http://identity.azurewebsites.net' + '/token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })},
};