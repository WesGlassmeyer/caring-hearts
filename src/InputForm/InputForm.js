import React, { Component } from "react";
import DropdownFilter from "../DropDownFilter/DropDownFilter";
import DateInput from "../DateInput/DateInput";

export default class InputForm extends Component {
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
  };

  setFormData = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  render() {
    const dropdownValues = {
      clinician: {
        id: "clinician",
        label: "Select a Clinician",
        name: "clinician",
        options: ["Jim", "Bob", "Joe", "Jen"],
      },
      office: {
        id: "office",
        label: "Select an Office",
        name: "office",
        options: ["CHC", "FFC"],
      },
      payer: {
        id: "payer",
        label: "Select Payer",
        name: "payer",
        options: ["Blue Cross", "Humana", "Aetna", "United Health Care"],
      },
      denial: {
        id: "denial",
        label: "Reason for Denial",
        name: "denial",
        options: [
          "Patient Responsibility/Deductible",
          "Coverage Terminated",
          "Invalid Prefix",
          "Invalid Modifier",
        ],
      },
    };

    const dateValues = {
      service: {
        id: "serviceDate",
        label: "Date of Service",
        name: "serviceDate",
      },
      eob: {
        id: "eobDate",
        label: "EOB Date",
        name: "eobDate",
      },
      followUpDate: {
        id: "followUpDate",
        label: "Follow Up Date",
        name: "followUpDate",
      },
    };

    return (
      <div>
        <div>Input Form</div>
        <form>
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
            id={dropdownValues.office.options}
            label={dropdownValues.office.label}
            options={dropdownValues.office.options}
            name={dropdownValues.office.name}
            value={this.state.office}
            onChange={this.setFormData}
            aria="office"
          />
          <div>
            <label htmlFor="name">Full name: </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={this.setFormData}
              value={this.state.name}
            ></input>
          </div>
          <div>
            <label htmlFor="member-id">Member ID: </label>
            <input
              type="text"
              id="memberId"
              name="memberId"
              value={this.state.memberId}
              onChange={this.setFormData}
            />
          </div>
          <DateInput
            id={dateValues.service.id}
            label={dateValues.service.label}
            value={this.state.serviceDate}
            name={dateValues.service.name}
            onChange={this.setFormData}
          />
          <DateInput
            id={dateValues.eob.id}
            label={dateValues.eob.label}
            value={this.state.eobDate}
            name={dateValues.eob.name}
            onChange={this.setFormData}
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
          <div>
            <label htmlFor="claim-number">Claim number: </label>
            <input
              type="text"
              id="claim-number"
              name="claimNumber"
              value={this.state.claimNumber}
              onChange={this.setFormData}
            />
          </div>
          <div>
            <label htmlFor="notes">Notes: </label>
            <textarea
              id="notes"
              name="notes"
              value={this.state.notes}
              onChange={this.setFormData}
            />
          </div>
          <DropdownFilter
            id={dropdownValues.denial.options}
            label={dropdownValues.denial.label}
            options={dropdownValues.denial.options}
            name={dropdownValues.denial.name}
            value={this.state.denial}
            onChange={this.setFormData}
            aria="denial"
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
          <DateInput
            id={dateValues.followUpDate.id}
            label={dateValues.followUpDate.label}
            value={this.state.followUpDate}
            name={dateValues.followUpDate.name}
            onChange={this.setFormData}
          />
          <div>
            <label htmlFor="balance">Remaining Balance: </label>
            <input
              type="text"
              id="balance"
              name="balance"
              value={this.state.balance}
              onChange={this.setFormData}
            />
          </div>
          <input
            type="submit"
            value="Submit"
            onClick={this.handleSubmit}
          ></input>
        </form>
      </div>
    );
  }
}
