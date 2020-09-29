import React from "react";

const TableRow = (props) => {
    return (
        <>
            { props.results.map(e => (
                <tr>
                    <td><img src={e.picture.thumbnail} alt={e.name.last} /></td>
                    <td>{e.name.last}</td>
                    <td>{e.name.first}</td>
                    <td>{e.gender}</td>
                    <td>{e.dob.age}</td>
                </tr>
            ))}
        </>
    )
}


export default TableRow;