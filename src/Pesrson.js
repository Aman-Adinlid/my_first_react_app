import'./Person.css';

function Person(props){
    return(<div> <div className= 'person'></div>
     <div className='person_name'>{props.name}</div>
        <div className='person_age'>{props.age}</div>
        <div className= 'person_email'>{props.email}</div>
        </div>);
}

export default Person;