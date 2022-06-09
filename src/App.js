import './App.css';
import {useState} from 'react';
import Frame from './Components/Frame/Frame';
import StoneTop from './Components/StoneTop/StoneTop';
import StoneDown from './Components/StoneDown/StoneDown';

function App() {

    const [lengthFrame, setLength] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [inputLength, setInputLength] = useState('');
    const [stoneTop, setStoneTop] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [inputStoneTop, setInputStoneTop] = useState('');
    const [stoneDown, setStoneDown] = useState([
        {column: [1, 2], positionStoneLeft: 4},
        {column: [1, 2, 3, 4], positionStoneLeft: 80}
        ])
    const [inputStoneDownRows, setInputStoneDownRows] = useState('');

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
        for (let i = 1; i <= inputStoneTop; i++) {
            newLength.push(i);
        }
        setStoneTop(newLength);
        setInputStoneTop('')
    }

    const changeStoneDownRows = () => {
        let newStoneDown = [];
        let positionStoneLeft = -71;
        let stones = [];
        const setStones = (count) => {
            stones = [];
            let numberStone = Number(prompt(`Количество костей на стержне ${count}`));
            /*if (numberStone == 'NaN') {
                alert('Пожалуйста, вводите только цифры')
                numberStone = Number(prompt(`Количество костей на стержне ${count}`));
            }*/
            for (let i = 1; i <= numberStone; i++) {
                stones.push(i);
            }
        }
        for (let i = 0; i < inputStoneDownRows; i++) {
            setStones(i + 1);
            newStoneDown.push({column: stones, positionStoneLeft: positionStoneLeft += 75 + i / 4});
        }
        setStoneDown(newStoneDown);
        setInputStoneDownRows('');
    }

    return (
        <div className='App'>
            <Frame lengthFrame={lengthFrame}/>
            <StoneTop stoneTop={stoneTop}/>
            <StoneDown stoneDown={stoneDown}/>
            <input type='number' placeholder='Set length' value={inputLength}
                   onChange={event => setInputLength(event.target.value)}/>
            <button onClick={changeLength}>Change</button>
            <input type='number' placeholder='Set top stone' value={inputStoneTop}
                   onChange={event => setInputStoneTop(event.target.value)}/>
            <button onClick={changeTopStone}>Change</button>
            <input type='number' placeholder='Set stone down rows' value={inputStoneDownRows}
                   onChange={event => setInputStoneDownRows(event.target.value)}/>
            <button onClick={changeStoneDownRows}>Change</button>
        </div>
    );
}

export default App;
