// import { useState } from "react";

function Counter(props) { // here the name should be equal both in parent and child component
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '120px' }}>{props.newcount}</h1>
            <button onClick={props.counterfn}>Count</button ><nbsp></nbsp>
            <button onClick={props.resetfn}>Reset</button >
        </div >
    )
}

export default Counter;