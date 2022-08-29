import React, {useEffect,useState} from "react";
import { Text } from "react-native";

import { carregaProdutores } from "../../../servicos/carregaDados";

export default function Produtores(){
 const [titulo,setTitulo] = useState('');

    useEffect(() => {

        const retorno = carregaProdutores();
        console.log(retorno);
        
    },[]);
    return <Text>Produtores</Text>
}