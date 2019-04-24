import React, { Component } from 'react';
import { Header } from './components/Header';
import SectionComplete  from './components/SectionComplete';
import List from './components/List';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: 
        [{
            id: 1,
            title: 'Task 1', 
            isCompleted: true
        }, {
            id: 2,
            title: 'Task 2', 
            isCompleted: false
        }, {
            id: 3,
            title: 'Task 3', 
            isCompleted: false
        }, {
            id: 4,
            title: 'Task 4', 
            isCompleted: true
        }],
        showCompleted: false,
    }
  }

  
  onCreateNewItem = () => {
    const more = this.state.list.length + 1;
    this.setState({
      list: [...this.state.list, {id: more, title: 'Task ' + more, isCompleted: false}]
    })

  }


  onToggleListItem = (id) => {
      this.state.list[id].isCompleted = this.state.list[id].isCompleted === true ? false : true
      this.setState({
          list: this.state.list
      })
  }


  onDeleteTask = (i) => {
    this.state.list.splice(i, 1)
    this.setState({
        list: this.state.list
    })

  }

  onEditTask = (idx, e) => {
    const {value} = e.target;
    this.state.list[idx].title = value
    this.setState({
        list: this.state.list
    })

    console.log(this.state.list);
  }


  NewLists = () => {
    return this.state.list.map((item, idx) => {
        item.id = idx
        return item
    })
  }


  render() {
    
    return (
       <div className="container">
        <div className="col-lg-6">
          <div className="list-group">
            <Header onCreateNewItem={this.onCreateNewItem} />
          
            <SectionComplete 
              list={this.NewLists}
              onToggleListItem={this.onToggleListItem} 
              onEditTask={this.onEditTask}
              onDeleteTask={this.onDeleteTask}
            />

            <List list={this.NewLists} 
              isCompleted={false} 
              onDeleteTask={this.onDeleteTask} 
              onEditTask={this.onEditTask}
              onToggleListItem={this.onToggleListItem} 
              />



          </div>
        </div>
       </div>
    )
  }

}

export default App;
