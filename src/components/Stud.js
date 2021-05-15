import React from 'react'

function Stud(props) {
    return (
        <div>
             <h4>{props.data.duedate}</h4>
            <button onClick={() =>props.data.checker("no pending data")}>Check due</button>
        </div>
    )
}

export default Stud
