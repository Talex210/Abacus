import './App.css';
import {useState} from 'react';
import Frame from './Components/Frame/Frame';
import StoneTop from './Components/StoneTop/StoneTop';
import StoneDown from './Components/StoneDown/StoneDown';
import Frame5 from './img/Frame5.png';
import Frame6 from './img/Frame6.png';
import Stone1 from './img/Vector5.png';
import Stone2 from './img/Vector6.png';

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
    const [chooseFrame, setFrame] = useState('1');
    const [chooseStone, setStone] = useState('1');

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
            /*if (numberStone == 'NaN') { /!*не работает*!/
                alert('Пожалуйста, вводите только цифры')
                numberStone = Number(prompt(`Количество костей на стержне ${count}`));
            } */
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
            <Frame lengthFrame={lengthFrame} chooseFrame={chooseFrame}/>
            <StoneTop stoneTop={stoneTop} chooseStone={chooseStone}/>
            <StoneDown stoneDown={stoneDown} chooseStone={chooseStone}/>
            <input type='number' placeholder='Set length' value={inputLength}
                   onChange={event => setInputLength(event.target.value)}/>
            <button onClick={changeLength}>Change</button>
            <input type='number' placeholder='Set top stone' value={inputStoneTop}
                   onChange={event => setInputStoneTop(event.target.value)}/>
            <button onClick={changeTopStone}>Change</button>
            <input type='number' placeholder='Set stone down rows' value={inputStoneDownRows}
                   onChange={event => setInputStoneDownRows(event.target.value)}/>
            <button onClick={changeStoneDownRows}>Change</button>
            <div>
                <input defaultChecked id='frame1' type='radio' name='frame' value='1' style={{width: '30px'}}
                       onChange={event => setFrame(event.target.value)}/>
                <input id='frame2' type='radio' name='frame' value='2' style={{width: '30px'}}
                       onChange={event => setFrame(event.target.value)}/>
                <input defaultChecked id='stone1' type='radio' name='stone' value='1' style={{width: '30px'}}
                       onChange={event => setStone(event.target.value)}/>
                <input id='stone2' type='radio' name='stone' value='2' style={{width: '30px'}}
                       onChange={event => setStone(event.target.value)}/>
            </div>
            <div>
                <label htmlFor='frame1' style={{margin: '5px'}}>
                    <img src={Frame5} alt='frame' style={{width: '30px'}}/>
                </label>
                <label htmlFor='frame2' style={{margin: '3px'}}>
                    <img src={Frame6} alt='frame' style={{width: '30px'}}/>
                </label>
                <label htmlFor='stone1' style={{margin: '5px'}}>
                    <img src={Stone1} alt='stone' style={{width: '30px', position: 'relative', top: '-105px'}}/>
                </label>
                <label htmlFor='stone2' style={{margin: '5px'}}>
                    <img src={Stone2} alt='stone' style={{width: '30px', position: 'relative', top: '-105px'}}/>
                </label>
            </div>
        </div>
    );
}

export default App;
