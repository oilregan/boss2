import React , {Component} from 'react';

export class Todo extends Component {

    state = {
        inputText: ''
    }

    handleChangeText = (event) => {
        this.setState({inputText: event.target.value});
    }

    render() {
        return(
            <div className="card clearfix">
            <div className="to-do-box">
                <h1 className="title">To-do-list</h1>
                <div className="form-box">
                    <input className="input input" type="text"
                        onChange={this.handleChangeText}
                        value={this.state.inputText}
                        />
                    <button clssName="bb-input button">Add</button>
                    <h2>{this.state.inputText}</h2>
                </div>



            </div>
        </div>
        )
    }
}