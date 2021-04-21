import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default class StepEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "" }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    console.log(this.state.data);
    let data = this.props.value;
    const { editState } = this.props;
    const thisIsMyCopy = "<h1>test</h1>";
    if (editState) {
      return (
        <div className="step-editor-container">
          <CKEditor
            editor={ClassicEditor}
            data={this.state.data}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              this.setState({ data: editor.getData() });
              //const data = editor.getData();
              console.log({ event, editor });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary step-editor-container__button"
            onClick={() => console.log(this.state.text)}
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary step-editor-container__button"
          >
            Save & Exit
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary step-editor-container__button"
          >
            Cancel
          </button>
        </div>
      );
    } else return <div dangerouslySetInnerHTML={{ __html: data }}></div>;
  }
}
