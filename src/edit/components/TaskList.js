import React from 'react';
import { connect } from 'react-redux';

class TaskList extends React.Component {
    render() {
            return(
                <div>
                    {this.props.taskList.map((task, index)=>{
                        return <div key={index}>
                            {task}
                        </div>
                    })}
                </div>
            );             
        }
    }

const mapStateToProp = state => {return {taskList: state.taskList}};

export default connect(mapStateToProp)(TaskList);

