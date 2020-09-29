import React, { Component } from "react";
import Table from "./Table";
import employee from "./employee.json";
import emp from "./employee.json";
import Navbar from "./Navbar";

class TableContainer extends Component {
    state = {
        employee: employee,
        asc: true,
        lastName: ""
    }

    sort = (arr, asc) => {
        if (asc) {
            arr.sort((a, b) => {
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

    handleSort = () => {
        let asc = this.state.asc;
        this.setState({
            employee: this.sort(employee, asc),
            asc: !asc
        });
    };

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({ lastName: value });
        let newMap = JSON.parse(JSON.stringify(emp));
        newMap = this.state.employee.filter(e => e.name.last.toUpperCase()
            .includes(this.state.lastName.toUpperCase()));
        this.setState({ employee: newMap });
    };

    render() {
        return (
            <>
                <Navbar
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Search By Last Name"
                />
                <div className="container mt-5">
                    <Table data={employee} handleSort={this.handleSort} />
                </div>
            </>
        );
    };
}

export default TableContainer;

