import React from 'react';
import StepEditor from '../components/StepEditor';

export default class Main extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            editState: false
        }
    }


    render() {
    return (<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 border-mixin">
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h3">Test Case</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">
          <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
          <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
        </div>
        <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
          <span data-feather="calendar"></span>
          This week
        </button>
      </div>
     
    </div>

    <h2 class="h5">Test-363 : 1 - Version1</h2>

    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header h5" id="flush-headingOne">
      <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Summary
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Пробный тест кейс</div>
    </div>
  </div>
  <div class="accordion accordion-flush" id="accordionFlushExample1">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Preconditions
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample1">
      <div class="accordion-body">Пробный тест кейс</div>
    </div>
  </div>
  </div>
</div>


    <h2>Section title</h2>
    <div class="table-responsive">
      <table class="table table-striped table-sm table-hover">
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
            <td><StepEditor editState={this.state.editState}></StepEditor></td>
            <td><StepEditor editState={this.state.editState}></StepEditor></td>
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
          <tr>
            <td>1,005</td>
            <td>dashboard</td>
            <td>irrelevant</td>
            <td>text</td>
            <td>placeholder</td>
          </tr>
          <tr>
            <td>1,006</td>
            <td>dashboard</td>
            <td>illustrative</td>
            <td>rich</td>
            <td>data</td>
          </tr>
          <tr>
            <td>1,007</td>
            <td>placeholder</td>
            <td>tabular</td>
            <td>information</td>
            <td>irrelevant</td>
          </tr>
          <tr>
            <td>1,008</td>
            <td>random</td>
            <td>data</td>
            <td>placeholder</td>
            <td>text</td>
          </tr>
          <tr>
            <td>1,009</td>
            <td>placeholder</td>
            <td>irrelevant</td>
            <td>visual</td>
            <td>layout</td>
          </tr>
          <tr>
            <td>1,010</td>
            <td>data</td>
            <td>rich</td>
            <td>dashboard</td>
            <td>tabular</td>
          </tr>
          <tr>
            <td>1,011</td>
            <td>information</td>
            <td>placeholder</td>
            <td>illustrative</td>
            <td>data</td>
          </tr>
          <tr>
            <td>1,012</td>
            <td>text</td>
            <td>placeholder</td>
            <td>layout</td>
            <td>dashboard</td>
          </tr>
          <tr>
            <td>1,013</td>
            <td>dashboard</td>
            <td>irrelevant</td>
            <td>text</td>
            <td>visual</td>
          </tr>
          <tr>
            <td>1,014</td>
            <td>dashboard</td>
            <td>illustrative</td>
            <td>rich</td>
            <td>data</td>
          </tr>
          <tr>
            <td>1,015</td>
            <td>random</td>
            <td>tabular</td>
            <td>information</td>
            <td>text</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>)}
}