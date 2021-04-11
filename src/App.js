import React from 'react';
import "./App.css";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import Navbar from "./components/navbar";
import PatientDetails from "./components/patient-details";
import Card from "./components/card";
import { getBarChartOptions, getDoughnutChartOptions, getLineChartOptions } from './utils/options';
import LabResults from './components/lab-results';

const activityChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      borderWidth: 10,
      hoverBorderColor: ["#3066D1", "#5E80DB", "#0E38A4", "#5E85D0", "#2F67D7", "#0E37A2", "#3264DB"],
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: ["#3066D1", "#5E80DB", "#0E38A4", "#5E85D0", "#2F67D7", "#0E37A2", "#3264DB"],
    }
  ]
};

const activityChartDataByMonth = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
  datasets: [
    {
      borderWidth: 10,
      hoverBorderColor: ["#3066D1", "#5E80DB", "#0E38A4", "#5E85D0", "#2F67D7", "#0E37A2", "#3264DB"],
      data: [25, 30, 35, 24, 24, 30],
      borderColor: ["#3066D1", "#5E80DB", "#0E38A4", "#5E85D0", "#2F67D7", "#0E37A2", "#3264DB"],
    }
  ]
};

const activityChartDataByYear = {
  labels: ['2021', '2020', '2019', '2018'],
  datasets: [
    {
      borderWidth: 10,
      hoverBorderColor: ["#3066D1", "#5E80DB", "#0E38A4", "#5E85D0", "#2F67D7", "#0E37A2", "#3264DB"],
      data: [30, 35, 45, 34],
      borderColor: ["#3066D1", "#5E80DB", "#0E38A4", "#5E85D0", "#2F67D7", "#0E37A2", "#3264DB"],
    }
  ]
};

const heartRateChartData = {
  labels: ['9AM', '10AM', '11AM', '12AM', '1AM', '2AM'],
  datasets: [
    {
      fill: false,
      data: [33, 53, 85, 41, 44, 65],
      pointBorderWidth: 0,
      borderWidth: 2,
      borderColor: "#ce6a6a"
    }
  ]
};

const bpChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      borderWidth: 10,
      hoverBorderColor: ["#FABE45", "#F58A4B", "#FABE45", "#985B32", "#FABE45", "#F58A4B", "#FABE45"],
      data: [102, 108, 90, 140, 83, 75, 58],
      borderColor: ["#FABE45", "#F58A4B", "#FABE45", "#985B32", "#FABE45", "#F58A4B", "#FABE45"],
    }
  ]
};

const bodyTemperatureChartData = {
  labels: ['9AM', '10AM', '11AM', '12AM', '1AM', '2AM'],
  datasets: [
    {
      fill: true,
      data: [25, 33, 38, 39, 30, 31],
      backgroundColor: "#FACDC9",
      borderWidth: 2, borderColor: "#D5898B", pointBackgroundColor: "#FFF", pointBorderColor: "#D5898B", pointHoverBackgroundColor: "#FFF", pointHoverBorderColor: "#D5898B", pointRadius: 0, pointHoverRadius: 6
    }
  ]
};

const healthConditionsChartData = {
  labels: ['Week1', 'Week2', 'Week3', 'Week4'],
  datasets: [
    {
      fill: true,
      data: [50, 25, 50, 65, 50, 70],
      pointBorderWidth: 0,
      borderWidth: 2,
      backgroundColor: "#CBCCFC",
      borderColor: "#A8A5F0"
    }
  ]
};

const doughnutData = {
  labels: [
    "Remain",
    "Completed"
  ], color: "#ccc", datasets: [
    {
      label: "Favourite", borderWidth: 0, backgroundColor: [
        "#607d8b",
        "#ccc"
      ], data: [
        24,
        76
      ]
    }
  ],
  text: '230Kcal'
}

const sleepPatternChartData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  datasets: [
    {
      fill: true,
      data: [33, 53, 33, 54, 20, 65, 46, 12, 35],
      backgroundColor: "#D3F7E5",
      borderWidth: 2, borderColor: "#ACE8CB", pointBackgroundColor: "#FFF", pointBorderColor: "#ACE8CB", pointHoverBackgroundColor: "#FFF", pointHoverBorderColor: "#ACE8CB", pointRadius: 0, pointHoverRadius: 6
    }
  ]
};

const sleepPatternLabels = {
  0: 'Awake',
  50: 'Light',
  100: 'Deep'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultActivitySelected: "Week",
      optionsVisible: false,
      activityDataObject: activityChartData,
      min: 0,
      max: 100,
      stepSize: 50
    }
    this.showOptions = this.showOptions.bind(this);
    this.handleOptionSelection = this.handleOptionSelection.bind(this);
    this.getdataObjects = this.getdataObjects.bind(this);
  }

  showOptions() {
    this.setState({ optionsVisible: !this.state.optionsVisible })
  }

  handleOptionSelection(event) {
    this.setState({
      defaultActivitySelected: event.target.dataset.action,
      optionsVisible: false
    }, () => this.getdataObjects(this.state.defaultActivitySelected));
  }

  getdataObjects(selectedOption) {
    if (selectedOption === "Week") {
      console.log(activityChartData);
      this.setState({
        activityDataObject: activityChartData,
        min: 50,
        max: 150,
        stepSize: 50
      });
    } if (selectedOption === "Month") {
      this.setState({
        activityDataObject: activityChartDataByMonth,
        min: 10,
        max: 30,
        stepSize: 10
      });
    } else if (selectedOption === "Year") {
      this.setState({
        activityDataObject: activityChartDataByYear,
        min: 15,
        max: 45,
        stepSize: 15
      });
    } else {
      return null;
    }
  }

  render() {
    const { defaultActivitySelected, optionsVisible, activityDataObject, min, max, stepSize } = this.state;
    return (
      <div id="wrapper">
        <div id="page-content-wrapper">
          <div id="content">
            <div className="container-fluid">
              <Navbar />
              <PatientDetails />
              <div className="py-3">
                <button className="btn btn-primary btn-active-section">Analytics</button>
                <div className="dashboard-main-area px-lg-1">
                  <div className="stat-cards d-md-flex cards">
                    <Card title="Activity" selectedOption={defaultActivitySelected} showOptions={this.showOptions} optionsVisible={optionsVisible} handleOptionSelection={this.handleOptionSelection}>
                      <Bar
                        data={activityDataObject}
                        width={100}
                        height={30}
                        options={getBarChartOptions(min, max, stepSize, "%")}
                      />
                    </Card>
                    <Card title="Heart Rate">
                      <Line data={heartRateChartData}
                        width={100}
                        height={30}
                        options={getLineChartOptions(0, 100, 50, "bpm")}
                      />
                    </Card>
                    <Card title="Blood Pressure">
                      <Bar
                        data={bpChartData}
                        width={100}
                        height={30}
                        options={getBarChartOptions(50, 150, 50, "mmHg")}
                      />
                    </Card>
                    <Card title="Body Temperature">
                      <Line data={bodyTemperatureChartData}
                        width={100}
                        height={30}
                        options={getLineChartOptions(30, 40, 5, "bpm")}
                      />
                    </Card>
                    <Card title="Past Appointment">
                      <p className="mb-0 text-primary">10AM - 11AM<span className="float-right text-muted">2 Sept</span></p>
                      <p className="mb-0 text-primary">Dr. Rakesh Chavan</p>
                    </Card>
                  </div>
                  <div className="row">
                    <div className="col-md-8 pr-lg-0">
                      <div className="card">
                        <div className="card-body">
                          <p className="card-title mb-2">Health Conditions</p>
                          <Line data={healthConditionsChartData}
                            width={100}
                            height={32}
                            options={getLineChartOptions(0, 100, 50, "%")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 pl-lg-0">
                      <Card title="Lab Results">
                        <LabResults />
                      </Card>
                      <div className="row">
                        <div className="col-md-5 pr-lg-0">
                          <Card title="Calories Burned">
                            <Doughnut ref={this.chartReference} data={doughnutData} width={100}
                              height={50}
                              options={getDoughnutChartOptions()} />
                          </Card>
                        </div>
                        <div className="col-md-7 pl-lg-0">
                          <Card title="Sleep Pattern">
                            <Line data={sleepPatternChartData}
                              width={100}
                              height={30}
                              options={getLineChartOptions(0, 100, 50, "", sleepPatternLabels)}
                            />
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
