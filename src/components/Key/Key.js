import React from 'react';

const Key = (props) => {
    const properties = [];
    for (let i of props.p) {
        if(Boolean(Object.values(i)[0].length)) {
            let group = Object.keys(i)[0];
            properties.push(<h4 key={group}>{group}</h4>);
            for (let j of Object.values(i)[0]) {
                properties.push(<div key={j.handle}>{j.fieldLabel} : {j.value}</div>);
            }
        }
    }
    return (
        <div>
            <h3>{props.id}</h3>
            {properties}
        </div>
    );
};

export default Key;