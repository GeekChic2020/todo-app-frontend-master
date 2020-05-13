import React from 'react';


class TaskCount extends React.Component {
    render() {
        return (
            <div className="row taskCountArea" >
                <div className="remaining col-12">
                    <h3>Tasks left: {this.props.taskCount}</h3>
                </div>
            </div>
        );
    }
}
export default TaskCount;