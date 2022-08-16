import { ChangeEvent, useState } from "react";
import { usePeopleList } from "./reducers/peopleList";

const App = () => {

  const [list, dispatch] = usePeopleList();
  const [nameInput, setNameInput] = useState("");

  const handleAddButton = () => {
    if(nameInput){
      dispatch({
        type: 'ADD',
        payload: {
          name: nameInput
        }
      });
      setNameInput("");
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  }

  const deletePerson = (id:string) => {
    dispatch({
      type: 'DEL',
      payload: {
        id: id
      }
    })
  }

  const handleOrderButton = () => {
    dispatch({
      type: 'ORDER'
    })
  }

  return (
    <div className="p-5">
      <input className="border-2" type="text" value={nameInput} onChange={handleInputChange} />
      <button onClick={handleAddButton}>Adicionar</button>

      <hr />

      <h1>People List</h1>
      <button onClick={handleOrderButton}>
      Ordenar
      </button>
      <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item.name}
        <button 
        className="border bg-slate-400 rounded m-2 p-1 hover:bg-slate-900 hover:text-gray-50"
        onClick={() => deletePerson(item.id)} >Deletar</button>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default App;
