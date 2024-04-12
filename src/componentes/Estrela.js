import React from "react"
import { Image, StyleSheet, TouchableOpacity } from "react-native"
import estrela from "../assets/estrela.png"
import estrelaCinza from "../assets/estrelaCinza.png"

export default function Estrela({ 
    onPress, 
    desabilitada = true, 
    preenchida,
    grande = false
}) {

    const estilos = estilosFuncao(grande)
    
    const getImagem = (i) => {
        if(preenchida) {
            return estrela
        }

        return estrelaCinza
    }
    
    return <TouchableOpacity
    onPress={onPress}
    //Onde atribuímos um ação após clique (onPress)
    disabled={desabilitada}
    >
          <Image style={estilos.estrela} source={getImagem()} />
    </TouchableOpacity>
  //Componente de botão com opacidade
  //deixa o elemento que está dentro clicável
}


const estilosFuncao = (grande) => StyleSheet.create({

    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2,
    }
})