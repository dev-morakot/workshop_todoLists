import React, { Component } from "react";

export class Header extends Component {

    render() {
        const { onCreateNewItem } = this.props
        return (
            <>
                <li className="list-group-item d-flex active justify-content-between align-items-center">
                    <h3>New List</h3>

                    <button className="btn btn-info" onClick={onCreateNewItem}>
                        <i className="fas fa-plus"></i>
                    </button>
                </li>
            
            </>
        )
    }
}
