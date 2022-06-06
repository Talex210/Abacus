import './App.css';
import Vector5 from './img/Vector5.png';
import {useState} from "react";
import Frame from "./Components/Frame/Frame";

function App() {

const [lengthFrame, setLength] = useState([1, 2, 3, 4, 5, 6, 7]);
const [value, setValue] = useState('');

const changeLength = () => {
    let newLength = [];
    for (let i = 1; i <= value; i ++) {
        newLength.push(i);
    }
    setLength(newLength);
    setValue('')
}

    return (
        <div className='App'>
            <Frame lengthFrame={lengthFrame}/>
            <img className='stone' src={Vector5} alt='frame'/>
            <input type='text' placeholder='Set length' value={value} onChange={event => setValue(event.target.value)}/>
            <button onClick={changeLength}>Change</button>
        </div>
    );
}

export default App;
