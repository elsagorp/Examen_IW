import React, {FC, useState} from "react";
import styled from '@emotion/styled'

const Button = styled.button`
  background-color: turquoise;
`

type BuscadorProps ={
    changeSta: (texto:string) => void;
    changeGen: (texto:string) => void;
    changeStaF: (b:boolean) => void;
    changeGenF: (texto:boolean) => void;
    changeNam: (b:string) => void;
    changeNamF: (texto:boolean) => void;

    
}
//Una funcion se pasa como "variable"
const Buscador: FC<BuscadorProps> = ({changeSta, changeGen, changeStaF, changeGenF, changeNam, changeNamF})=> {
    const [status, setTexto] = useState<string> ("");
    const [gen, setGen] = useState<string> ("");
    const [nam, setNam] = useState<string> ("");
    // const { data, loading, error, refetch } =
//     useQuery<CharactersType>(GET_CHARACTERS_STATUS, { variables: { filter: {status: status} } });
//     useQuery<CharactersType>(GET_CHARACTERS_GENDER, { variables: { filter: {gender: gen}  } });

//   const [showmodal, setShowModal] = useState(false);
//   const [characterModal, setCharacterModal] = useState({
//     name: "",
//     status: "",
//     species: "",
//     type: "",
//     id: 0,
//     gender: "",
//     image: "",
//     origin: { id: 0, name: "", type: "", dimension: "" },
//     location: { id: 0, name: "", type: "", dimension: "" }
//   });

//   if(loading){
//     return <h1>Loading...</h1>
//   }

    return(
    <div>
            <input placeholder="Buscar por status"
                type = "text" value = {status} 
                onChange={(e)=> setTexto(e.target.value)}
            />     
            <button onClick = {()=> {changeSta(status)
                    changeStaF(true)}}>Buscar</button>
       &nbsp;&nbsp;
            <input placeholder="Buscar por género"
                type = "text" value = {gen} 
                onChange={(e)=> setGen(e.target.value)}
            />
            <button onClick = {()=>{ changeGen(gen)
            changeGenF(true)}}>Buscar</button>
&nbsp;&nbsp;
                        <input placeholder="Buscar por nombre"
                type = "text" value = {nam} 
                onChange={(e)=> setNam(e.target.value)}
            />
            <button onClick = {()=> {changeNam(nam)
                    changeNamF(true)}}>Buscar</button>
        </div>)
}

export default Buscador;