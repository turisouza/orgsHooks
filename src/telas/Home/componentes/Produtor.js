import React, { useMemo, useReducer } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Estrelas from "../../../componentes/Estrelas"

const distanciaEmMetros = (distancia) => {
    return `${distancia}m`
}

export default function Produtor({nome, imagem, distancia, estrelas}) {

    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado) => !selecionado,
        false
    )

    const distanciaEmTexto = useMemo(() => distanciaEmMetros(distancia), [distancia]) 
    //No segundo parâmetro do useMemo informamos quando ele deve recarregar
    //a informação, só quando o segundo parâmetro for alterado

    return  <TouchableOpacity 
    style={estilos.cartao}
    onPress={inverterSelecionado}
    >
        <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
        <View style={estilos.informacoes}>
            <View>
                 <Text style={estilos.nome}>{ nome }</Text>
                 <Estrelas 
                 quantidade={estrelas}
                 editavel={selecionado}
                 grande={selecionado}
                 />
            </View>
            
             <Text style={estilos.distancia}>{distanciaEmTexto}</Text>
        </View>

    </TouchableOpacity>

   
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: "#f6f6f6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",

        //Sombra no Android
        elevation: 4,

        //Sombra no IOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62

        //Existem alguns simuladores de sombra na internet
        //que já geram o código tanto pra android como pra IOS
    },

    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,


    },

    informacoes: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },

    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold"
    },

    distancia: {
        fontSize: 12,
        lineHeight: 19
    }

})