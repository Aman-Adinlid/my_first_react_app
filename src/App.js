import React from "react";
import Person from './Pesrson';

function App() {

  const persons = [
    {
      id:1,
      name: 'Ellen',
      age: 20,
      email: '94elleen@gmail.com',
    },
    {
      id:2,
      name: 'Aman',
      age: 26,
      email: '43aman@gmail.com',
    },{
      id:3,
      name: 'Sara',
      age: 22,
      email: '87sara@gmail.com',
    },

  ];
  return (
    <div>
     <h2>Hello react</h2>
     <Person  name={persons[0].name} age={persons[0].age} email={persons[0].email}></Person>
     <Person  name={persons[1].name} age={persons[1].age} email={persons[1].email}></Person>
     <Person  name={persons[2].name} age={persons[2].age} email={persons[2].email}></Person>
     </div>
  );
}

export default App;
