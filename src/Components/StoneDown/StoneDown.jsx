import React from 'react';
import Vector5 from "../../img/Vector5.png";

const StoneDown = (props) => {
    let positionStoneLeft = -71;
    let positionStoneTop = 260;
    return (
        <div>
            {props.stoneDownNumberColumn.map( sv =>
                <img src={Vector5} alt='stone' style={{
                position: 'absolute', top: `${positionStoneTop -= 35}px`,
                left: '5px'
            }
            } key={sv}/>
                )}
            {props.stoneDown.map(sh =>
                <img src={Vector5} alt='stone' style={{
                    position: 'absolute', top: '260px',
                    left: `${positionStoneLeft += 75 + sh / 5}px`
                }
                } key={sh}/>
            )}
        </div>
    );
};

export default StoneDown;