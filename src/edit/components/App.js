import React from 'react';
import { connect } from 'react-redux';
import '../stylesheet/index.css';
import { changeflag } from '../actions';
import { addTask } from '../actions';
import TaskList from './TaskList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      task: ''
    }
  }

  logout() {
    this.props.changeflag(false);
  }

  inputText = (event) =>{
    this.setState({task: event.target.value});
  }

    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <p className='headline'>Todo App using React-Redux</p>
                    <form className='todoform' onSubmit={e=>{
                      this.props.addTask(this.state.task)
                      e.preventDefault()
                      this.textValue.value=''
                    }}>
                        <input
                            className='inputs'  
                            type='text' 
                            placeholder='Enter the task'
                            onChange={this.inputText}
                            ref={(text)=>{this.textValue=text}}
                        />
                    </form>
                  <br />
                  <TaskList />
                  <br />
                    <button className='submitbtn' onClick={()=>{this.logout()}}>Logout</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { changeflag, addTask })(App);