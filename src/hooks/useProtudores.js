import { useEffect, useState } from "react"
import { carregaProdutores } from "../servicos/carregaDados"

export default function useProdutores() {
    const [titulo, setTitulo] = useState("")
    const [lista, setLista] = useState([])

    useEffect(() => {
        const retorno = carregaProdutores()

        retorno.lista.sort(
            (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
        );
        setTitulo(retorno.titulo)

        setLista(retorno.lista)

    }, [])
    // O array vazio no final indica que a função irá carregar
    // assim que o componente for carregado apenas 1x

    return [titulo, lista]
}