import React from 'react';
import ReactQuill from 'react-quill'; 

export default class StepEditor extends React.Component {
    constructor(props){
        super(props);
        this.state = { text: "" } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({ text: value })
      }

    render() { 
        let data = this.props.value;
        const {editState} = this.props;
        const thisIsMyCopy = "<h1>test</h1>"
        if(editState){
        return (
        <div className="step-editor-container">
            <ReactQuill value={this.props.value}
                  onChange={this.handleChange}/>
            <button type="button" className="btn btn-sm btn-outline-secondary step-editor-container__button" onClick={() => console.log(this.state.text)}>Save</button>
            <button type="button" className="btn btn-sm btn-outline-secondary step-editor-container__button">Save & Exit</button>
            <button type="button" className="btn btn-sm btn-outline-secondary step-editor-container__button">Cancel</button>
        </div>)
    }
        else return (<div dangerouslySetInnerHTML={{__html: data}}></div>)
    }
}

