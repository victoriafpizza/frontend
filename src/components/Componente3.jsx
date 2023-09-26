import { useState } from "react"
import { Button } from "../styled"

export default function Componente3(){

    const [tarefa, setTarefa]= useState('')
    const [todas, setTodas]= useState([])
    const anotarTarefa = (e)=>{
        setTarefa(e.targe.value)
    }

    const inserirTarefa = ()=>{
        setTodas([...todas, tarefa])
    }
    return(
        <div>
            <textarea onChange={anotarTarefa} value={tarefa}></textarea>
            <br></br>
            <Button $inOn={tarefa} onClick={inserirTarefa}> Anotar Tarefa </Button>
            <ul>
                {todas.map((tar,i)=> <li key={i}>{tar}</li>)}
            </ul>
        </div>
    )
}