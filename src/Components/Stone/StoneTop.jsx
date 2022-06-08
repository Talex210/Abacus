import React from 'react';
import Vector5 from "../../img/Vector5.png";

const StoneTop = (props) => {
    let positionStoneLeft = -71;
    return (
        <div>
            {props.stoneTop.map(f =>
                <img src={Vector5} alt='stone' style={{
                    position: 'absolute', top: '15px',
                    left: `${positionStoneLeft += 75 + f / 5}px`
                }
                } key={f}/>
            )}
        </div>
    );
};

export default StoneTop;