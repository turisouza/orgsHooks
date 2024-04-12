import React from "react"
import logo from "../../../assets/logo.png"
import { Image, StyleSheet, Text, View } from "react-native"
import useTopo from "../../../hooks/useTopo"

export default function Topo() {

    const [boasVindas, legenda] = useTopo()

    return <View style={estilos.topo}>
    <Image style={estilos.imagem} source={logo}/>
    <Text style={estilos.boasVindas}>{boasVindas}</Text>   
    <Text style={estilos.legenda}>{legenda}</Text>
    </View>
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#f6f6f6",
        padding: 16,

    },
    imagem: {
        width: 70,
        height: 28,
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        color: "#464646"

    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: "#a3a3a3"
    }
})

