import { useState } from 'react'
import './App.css'

export default function App() {
  const [people, setPeople] = useState([
    {id:101, name:"Tiko", surname:"Harutyunyan", salary:200000},
    {id:102, name:"Ano", surname:"Davtyan", salary:50000},
    {id:103, name:"Gago", surname:"Tigranyan", salary:50000},
    {id:104, name:"Maro", surname:"Melqonyan", salary:150000},
    {id:105, name:"Saro", surname:"Harutyunyan", salary:75000},
    {id:106, name:"Varo", surname:"Mnacakanyan", salary:50000},
  ]);

  const handleSalaryUp = (id) => {
    let temp = [...people];
    let index = temp.findIndex(x => x.id == id);
    temp[index].salary += 50000;
    setPeople(temp);
  }

  const handleSalaryDown = (id) => {
    let temp = [...people];
    let index = temp.findIndex(x => x.id == id);
    if (temp[index].salary <= 50000) {
      alert("Cannot be lower than 50.000");
    } else if (temp[index].salary - 50000 <= 50000) {
      temp[index].salary = 50000
      setPeople(temp);
    } else {
      temp[index].salary -= 50000;
      setPeople(temp);
    }
  }

  const handleRemove = (id) => {
    let temp = [...people];
    let index = temp.findIndex(x => x.id == id);
    temp.splice(index, 1);
    setPeople(temp);
    alert("Employee removed");
  }

  return <>
    {
      people.map(item => <div key={item.id}> 
        <p>{item.name} {item.surname}</p> 
        <strong>{item.salary} AMD</strong>
        <button onClick = {() => handleSalaryUp(item.id)}>Salary up</button>
        <button onClick = {() => handleSalaryDown(item.id)}>Salary Down</button>
        <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>)
    }
  </>
}