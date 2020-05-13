import React from 'react';

class AddTask extends React.Component {

  state = {
    taskDescription: "Enter Your Task..."

  }

  addTask = () => {
    this.props.addTaskFunc(this.state.taskDescription);
  }

  taskDescriptionChanged = (event) => {
    this.setState({
      taskDescription: event.target.value
    });
  }

  render() {

    return (

      < div className="row">
        <div className="col-12">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Task to add...."
              onChange={this.taskDescriptionChanged}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="button" onClick={this.addTask}>
                Add
            </button>
            </div>
          </div>
        </div>
      </div >

    );

  }
}

export default AddTask;
