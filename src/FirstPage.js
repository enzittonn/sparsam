import React from "react";
import SecondPage from "./SecondPage";
import { Link } from "react-router-dom";
import ReactSlider from "react-slider";
import CompoundInterestChart from "./CompoundInterestChart";
import "./FirstPage.css";

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueStart: 70000,
      valueAvkastning: 7,
      valueMonth: 10000,
      valueYears: 50,
    };
  }

  handleValueStart = (value) => this.setState({ valueStart: value });
  handleValueAvkastning = (value) => this.setState({ valueAvkastning: value });
  handleValueMonth = (value) => this.setState({ valueMonth: value });
  handleValueYears = (value) => this.setState({ valueYears: value });

  render() {
    return (
      <div className="testing">
        <Link to="/SecondPage">
          <button className="button-video" onClick={() => <SecondPage />}>
            Börja ditt sparande här med 3 enkla steg!
          </button>
        </Link>
        <div className="sliders">
          <div className="tets">
            <label className="label">Startbelopp</label>
            <label className="value-label">{this.state.valueStart} kr</label>
            <ReactSlider
              step={10000}
              min={0}
              max={1000000}
              defaultValue={70000}
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              value={this.valueStart}
              onChange={(value: any) => {
                this.handleValueStart(value);
              }}
            />
          </div>
          <div className="tets">
            <label className="label">Avkastning per år</label>
            <label className="value-label">{this.state.valueAvkastning}%</label>
            <ReactSlider
              step={1}
              min={0}
              max={20}
              defaultValue={7}
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              value={this.valueAvkastning}
              onChange={(value: any) => {
                this.handleValueAvkastning(value);
              }}
            />
          </div>
          <div className="tets">
            <label className="label">Belopp per månad</label>
            <label className="value-label">{this.state.valueMonth} kr</label>
            <ReactSlider
              step={500}
              min={0}
              max={50000}
              defaultValue={10000}
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              value={this.valueMonth}
              onChange={(value: any) => {
                this.handleValueMonth(value);
              }}
            />
          </div>
          <div className="tets">
            <label className="label">Spartid i år</label>
            <label className="value-label">{this.state.valueYears} år</label>
            <ReactSlider
              step={1}
              min={1}
              max={75}
              defaultValue={50}
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              value={this.valueYears}
              onChange={(value: any) => {
                this.handleValueYears(value);
              }}
            />
          </div>
        </div>
        <div style={{height:'500px',width:'700px'}}>
          <CompoundInterestChart data={this.state} />
        </div>
      </div>
    );
  }
}

export default FirstPage;
