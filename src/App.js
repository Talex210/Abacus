import './App.css';
import {useState} from "react";
import Frame from "./Components/Frame/Frame";
import StoneTop from "./Components/Stone/StoneTop";

function App() {

    const [lengthFrame, setLength] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [inputLength, setInputLength] = useState('');
    const [stoneTop, setStoneTop] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [inputStone, setInputStone] = useState('');

    const changeLength = () => {
        let newLength = [];
        for (let i = 1; i <= inputLength; i++) {
            newLength.push(i);
        }
        setLength(newLength);
        setInputLength('')
    }

    const changeTopStone = () => {
        let newLength = [];
        for (let i = 1; i <= inputStone; i++) {
            newLength.push(i);
        }
        setStoneTop(newLength);
        setInputStone('')
    }

    return (
        <div className='App'>
            <Frame lengthFrame={lengthFrame}/>
            <StoneTop stoneTop={stoneTop}/>
            <input type='number' placeholder='Set length' value={inputLength}
                   onChange={event => setInputLength(event.target.value)}/>
            <button onClick={changeLength}>Change</button>
            <input type='number' placeholder='Set top stone' value={inputStone}
                   onChange={event => setInputStone(event.target.value)}/>
            <button onClick={changeTopStone}>Change</button>
        </div>
    );
}

export default App;
