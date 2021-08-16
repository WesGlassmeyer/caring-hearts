import React, { Component } from "react";
import DropdownFilter from "../DropDownFilter/DropDownFilter";
import DateInput from "../DateInput/DateInput";

export default class SearchPage extends Component {
  state = {
    clinician: "",
    office: "",
    name: "",
    serviceDate: "",
    eobDate: "",
    memberId: "",
    claimNumber: "",
    payer: "",
    notes: "",
    denial: "",
    resolved: "false",
    followUpDate: "",
    balance: "",
    payPeriod: "",
  };

  setFormData = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("searching");
  };

  render() {
    const dropdownValues = {
      clinician: {
        id: "clinician",
        label: "Select a Clinician",
        name: "clinician",
        options: ["Jim", "Bob", "Joe", "Jen"],
      },
      payer: {
        id: "payer",
        label: "Select Payer",
        name: "payer",
        options: ["Blue Cross", "Humana", "Aetna", "United Health Care"],
      },
    };

    let dateValues = {
      followUpDate: {
        id: "followUpDate",
        label: "Follow Up Date",
        name: "followUpDate",
      },
    };

    return (
      <div>
        <form>
          Search Page
          <div>
            <label htmlFor="name">Client Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={this.setFormData}
              value={this.state.name}
            ></input>
          </div>
          <DropdownFilter
            id={dropdownValues.clinician.options}
            label={dropdownValues.clinician.label}
            options={dropdownValues.clinician.options}
            name={dropdownValues.clinician.name}
            value={this.state.clinician}
            onChange={this.setFormData}
            aria="clinician"
          />
          <DropdownFilter
            id={dropdownValues.payer.options}
            label={dropdownValues.payer.label}
            options={dropdownValues.payer.options}
            name={dropdownValues.payer.name}
            value={this.state.payer}
            onChange={this.setFormData}
            aria="payer"
          />
          <DateInput
            id={dateValues.followUpDate.id}
            label={dateValues.followUpDate.label}
            value={this.state.followUpDate}
            name={dateValues.followUpDate.name}
            onChange={this.setFormData}
          />
          <div>
            <label htmlFor="resolved">Resolved:</label>
            <input
              type="checkbox"
              id="resolved"
              name="resolved"
              onChange={this.setFormData}
              value={
                this.state.resolved === ""
                  ? true
                  : this.state.resolved === "true"
                  ? false
                  : true
              }
            />
          </div>
        </form>
      </div>
    );
  }
}
