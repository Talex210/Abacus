import React from 'react';
import Stone1 from '../img/Vector5.png';
import Stone2 from '../img/Vector6.png';

const StoneTop = (props) => {
    let positionStoneLeft = -71;
    return (
        <div>
            {props.stoneTop.map(sh =>
                <img src={props.chooseStone === '1' ? Stone1 : Stone2} alt='stone' style={{
                    position: 'absolute', top: '15px',
                    left: `${positionStoneLeft += 75 + sh / 5}px`
                }
                } key={sh}/>
            )}
        </div>
    )
}

export default StoneTop;