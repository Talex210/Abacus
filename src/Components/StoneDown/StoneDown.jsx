import React from 'react';
import Stone1 from "../../img/Vector5.png";
import Stone2 from "../../img/Vector6.png";

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
                    <img src={props.chooseStone === '1' ? Stone1 : Stone2} alt='stone' style={{
                        position: 'absolute', top: `${changePositionStoneTop(i)}px`,
                        left: `${s.positionStoneLeft}px`
                    }} key={i}/>
                )
            )}
        </div>
    )
}

export default StoneDown;