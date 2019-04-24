import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        const { listItem, isCompleted, onDeleteTask, onEditTask, onToggleListItem } = this.props;
        return (
            <>
                {
                    listItem().filter((item) => item.isCompleted === isCompleted).map((item, idx) => {
                        return (
                            <li key={idx} className="list-group-item d-flex justify-content-between">
                                <input id={idx} checked={isCompleted} type="radio"onClick={() => onToggleListItem(item.id)} />
                                <input className={'form-control'} style={{width: 250}} value={item.title} onChange={(e) => onEditTask(item.id, e)} />
                                
                                <button onClick={() => onDeleteTask(item.id)} className="btn btn-danger">
                                    <i className="fas fa-trash">
                                    </i>
                                </button>
                            </li>
                        )
                    })
                }
            </>
        )
    }
}

export default ListItem