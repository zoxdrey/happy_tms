import React from 'react';
import StepEditor from '../components/StepEditor';

export default class Main extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            editState: false,
            testCaseTitle: "Case",
            testCaseId: "",
            testCaseSteps: [
              {
                id: 1,
                stepAction: "put ot down",
                expectedResult: "putting"
              }

            ]
        }
    }

    componentDidMount(){
      fetch("http://127.0.0.1:5001/api/auth/login", {method: 'POST'})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          testCaseid: data.testCaseid,
          testCaseTitle: data.testCaseName,
          testCaseSteps: data.testCaseSteps
        })
      });
    }

    render() {
      console.log(this.state.testCaseSteps);
    return (<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 border-mixin">
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h3">Test Case</h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group me-2">
          <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
          <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
        </div>
        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
          <span data-feather="calendar"></span>
          This week
        </button>
      </div>
     
    </div>

    <h2 className="h5">Test-{this.state.testCaseId} :{this.state.testCaseTitle} - Version1</h2>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
    </svg>
    <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header h5" id="flush-headingOne">
      <button className="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Summary
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Пробный тест кейс</div>
    </div>
  </div>
  <div className="accordion accordion-flush" id="accordionFlushExample1">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Preconditions
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample1">
      <div className="accordion-body">Пробный тест кейс</div>
    </div>
  </div>
  </div>
</div>


    <h2>Section title</h2>
    <div className="table-responsive">
      <table className="table table-striped table-sm table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td>1,001</td>
            <td><StepEditor editState={this.state.editState} value={this.state.testCaseSteps[0].step}></StepEditor></td>
            <td><StepEditor editState={this.state.editState} value={this.state.testCaseSteps[0].expectedResult}></StepEditor></td>
            <td><button onClick={() => this.setState({editState: !this.state.editState})}>123</button></td>
            <td>text</td>
          </tr>
          <tr>
            <td>1,002</td>
            <td>placeholder</td>
            <td>irrelevant</td>
            <td>visual</td>
            <td>layout</td>
          </tr>
          <tr>
            <td>1,003</td>
            <td>data</td>
            <td>rich</td>
            <td>dashboard</td>
            <td>tabular</td>
          </tr>
          <tr>
            <td>1,003</td>
            <td>information</td>
            <td>placeholder</td>
            <td>illustrative</td>
            <td>data</td>
          </tr>
          <tr>
            <td>1,004</td>
            <td>text</td>
            <td>random</td>
            <td>layout</td>
            <td>dashboard</td>
          </tr>
        
        </tbody>
      </table>
    </div>
  </main>)}
}