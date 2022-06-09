import React from 'react';
import Frame5 from '../../img/Frame5.png';
import Frame6 from '../../img/Frame6.png';

const Frame = (props) => {
    return (
        <div>
            {props.lengthFrame.map(f =>
                <img src={props.chooseFrame === '1' ? Frame5 : Frame6} alt='frame' key={f}/>
            )}
        </div>
    )
}

export default Frame;