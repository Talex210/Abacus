import React from 'react';
import Vector5 from '../../img/Vector5.png';

const StoneDown = (props) => {
    let positionStoneTop;
    const changePositionStoneTop = (i) => {
        if (i === 0) {positionStoneTop = 290}
        positionStoneTop -= 35
        return positionStoneTop
    }
    return (
        <div>
            {props.stoneDown.map( s =>
                s.column.map( (c, i) =>
                    <img src={Vector5} alt='stone' style={{
                        position: 'absolute', top: `${changePositionStoneTop(i)}px`,
                        left: `${s.positionStoneLeft}px`
                    }} key={i}/>
                )
            )}
        </div>
    )
}

export default StoneDown;