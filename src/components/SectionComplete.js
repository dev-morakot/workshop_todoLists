import React from "react";
import List from "./List";

class SectionComplete extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showCompleted: true
        }
    }
  
    onToggleCompletedList = () => {
        this.setState({
            showCompleted: !this.state.showCompleted
        })
    }

    render() {
        const { list, onDeleteTask, onEditTask, onToggleListItem, } = this.props
        const { showCompleted } = this.state
        return (
            <>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>{list().filter(item => item.isCompleted === true).length} Completed</span>
                <button className="btn btn-link" onClick={this.onToggleCompletedList} style={{ float: "right" }}>
                        {showCompleted ? 'Hide' : 'Show'}
                </button>
            </li>
            
                
                {showCompleted && 
                    <List list={list} isCompleted onDeleteTask={onDeleteTask} onEditTask={onEditTask} onToggleListItem={onToggleListItem} />}
                <hr />
            
            </>
        )
    }
}

export default SectionComplete