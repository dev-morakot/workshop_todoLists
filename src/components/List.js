import React, { Component } from 'react';
import ListItem from './ListItem';
class List extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        const { list, isCompleted, onDeleteTask, onEditTask, onToggleListItem } = this.props
        return (
            
                <ListItem 
                        listItem={list} 
                        isCompleted={isCompleted}
                        onToggleListItem={onToggleListItem} 
                        onEditTask={onEditTask}
                        onDeleteTask={onDeleteTask}
                    />

           
        )
    }
}

export default List;