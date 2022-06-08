import './App.css';
import {useState} from "react";
import Frame from "./Components/Frame/Frame";
import StoneTop from "./Components/Stone/StoneTop";

function App() {

    const [lengthFrame, setLength] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [value, setValue] = useState('');
    const [stoneTop, setStoneTop] = useState([1, 2, 3, 4, 5, 6, 7]);

    const changeLength = () => {
        let newLength = [];
        for (let i = 1; i <= value; i++) {
            newLength.push(i);
        }
        setLength(newLength);
        setValue('')
    }

    return (
        <div className='App'>
            <Frame lengthFrame={lengthFrame}/>
            <StoneTop stoneTop={stoneTop}/>
            <input type='number' placeholder='Set length' value={value}
                   onChange={event => setValue(event.target.value)}/>
            <button onClick={changeLength}>Change</button>
        </div>
    );
}

export default App;
