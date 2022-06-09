import React from 'react';
import Frame5 from '../../img/Frame5.png';

const Frame = (props) => {
    return (
        <div>
            {props.lengthFrame.map(f =>
                <img src={Frame5} alt='frame' key={f}/>
            )}
        </div>
    )
}

export default Frame;