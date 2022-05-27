import { useQuery } from "@apollo/client";
import { FC, useState } from "react";
import { GET_CHARACTERS } from "../queries";
import { CharactersProps, CharactersType, CharacterType } from "../types";
import ModalCharacter from "./modalCharacter";
import "../styles/characters.css";
import styled from "@emotion/styled";


const CharacterStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  
  
  margin: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 40px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.5);
  }
  
`;



const Characters: FC<CharactersProps> = ({ page, filtsta,filtgen, status, gender }) => {

//   function SortArray(x: { name: string}, y: { name: string }){
//     if (x.name < y.name) {return -1;}
//     if (x.name> y.name) {return 1;}
//     return 0;
// }


//, name:{orderBy: "ASC" }
    const { data, loading, error, refetch } =
    useQuery<CharactersType>(GET_CHARACTERS, { variables: { page: page } });
  const num = 0;
  const [showmodal, setShowModal] = useState(false);
  const [characterModal, setCharacterModal] = useState({
    name: "",
    status: "",
    species: "",
    type: "",
    id: 0,
    gender: "",
    image: "",
    origin: { id: 0, name: "", type: "", dimension: "" },
    location: { id: 0, name: "", type: "", dimension: "" }
  });

  if(loading){
    return <h1>Loading...</h1>
  }

  if(data){
    // if(data.characters.results.length > 0){
      const datas = data.characters.results.slice().sort((a, b) => (a.name > b.name) ? 1 : -1);
    //console.log(datas);
    // }
    if(datas){
    return (
      <div className="Characters">
        {datas.map(elem => <div key={elem.id} onClick={() => {
          setCharacterModal(elem);
          setShowModal(!showmodal);
        }
        }>
          <ModalCharacter character={characterModal} show={showmodal} />
          <CharacterStyled ><img src={elem.image}></img><div>{elem.name}</div></CharacterStyled>
        </div>)}
      </div>
    )
      }else{
        return <h1>No hay personajes</h1>
      }
  }  else return <h1>Error</h1>


  
}
export default Characters;