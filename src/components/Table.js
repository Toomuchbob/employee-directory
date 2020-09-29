import React from "react";
import TableRow from "./TableRow"

const Table = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col" data="name.last" onClick={props.handleSort}>Photo</th>
                    <th scope="col" data="name.last" onClick={props.handleSort}>Last</th>
                    <th scope="col" data="name.first" onClick={props.handleSort}>First</th>
                    <th scope="col" data="gender" onClick={props.handleSort}>Gender</th>
                    <th scope="col" data="dob.age" onClick={props.handleSort}>Age</th>
                </tr>
            </thead>
            <tbody>
                <TableRow results={props.data} />
            </tbody>
        </table>
    );
};

export default Table;