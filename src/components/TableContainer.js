import React, { Component } from "react";
import Table from "./Table";
import employee from "./employee.json";
import Navbar from "./Navbar";

class TableContainer extends Component {
    state = {
        employee: employee,
        asc: true
    }

    sort = (arr, asc, prop) => {
        console.log(prop);
        if (asc) {
            arr.sort((a, b) => {
                console.log(a["name"]["first"])
                if (a.name.last < b.name.last) {
                    return -1;
                }
                if (a.name.last > b.name.last) {
                    return 1;
                }
                return 0;
            })
        } else {
            arr.sort((a, b) => {
                if (a.name.last > b.name.last) {
                    return -1;
                }
                if (a.name.last < b.name.last) {
                    return 1;
                }
                return 0;
            })
        }
    };

    handleSort = event => {
        let asc = this.state.asc;
        console.log(event.target.getAttribute("data"));
        this.setState({
            employee: this.sort(employee, asc, event.target.getAttribute("data")),
            asc: !asc
        });
    };

    render() {
        return (
            <>
                <Navbar brand="Employee Directory" />
                <div className="container mt-5">
                    <Table data={employee} handleSort={this.handleSort} />
                </div>
            </>
        );
    };
}

export default TableContainer;

