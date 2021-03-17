import './App.css';
import 'react-quill/dist/quill.snow.css'; 
import React from 'react';
import QuillComponent from 'react-quill/lib/component';
import './index.css';
import './dashboard.css';
import Header from './pages/Header';
import Sidebar from './pages/Sidebar';
import Main from './pages/Main';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      testCaseId: "TEST",
      testCaseSteps: [
        {id:1, step: "step", expectedResult: "expectedResult"},
        {id:2, step: "step", expectedResult: "expectedResult"},
      ],
      editState: false}
  }
 

  addStep() {
    let steps = this.state.testCaseSteps;
    steps.push({id:1, step: "step", expectedResult: "expectedResult"});
    console.log(this.setState(this.state.testCaseSteps));
  }

  render() {
    return (
    <div className="App">
      <Header/>
    <div className="container-fluid">
      <div className="row">
        <Sidebar/>
        <Main/>  
      </div>
</div>
    </div>
  );}
}

export default App;
