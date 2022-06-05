import './App.css';
import Frame5 from './img/Frame5.png';
import Vector5 from './img/Vector5.png';

function App() {
    return (
        <div className='App'>
            <img src={Frame5} alt='frame'/>
            <img src={Frame5} alt='frame'/>
            <img src={Frame5} alt='frame'/>
            <img src={Frame5} alt='frame'/>
            <img src={Frame5} alt='frame'/>
            <img className='stone' src={Vector5} alt='frame'/>
        </div>
    );
}

export default App;
