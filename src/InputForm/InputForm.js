import React, { Component } from "react";

export default class InputForm extends Component {
  state = {
    clinician: "",
    office: "",
    name: "",
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="clinician">Choose a clinician:</label>

            <select name="clinician" id=" clinician">
              <option value="jim">Jim</option>
              <option value="bob">Bob</option>
              <option value="joe">Joe</option>
              <option value="jen">Jen</option>
            </select>
          </div>
          <div>
            <label htmlFor="office">Choose an Office:</label>

            <select name="office" id="office">
              <option value="caring hearts">Caring Hearts</option>
              <option value="option b">Option B</option>
            </select>
          </div>
          <div>
            <label htmlFor="name">Full name:</label>
            <input type="text" id="name" name="name"></input>
          </div>
          <div>
            <label htmlFor="member-id">Member ID:</label>
            <input
              type="text"
              id="member-id"
              name="member-id"
              value={this.state.memberId}
              onChange={this.setMemberId}
            />
          </div>
          <div className="detail-input-format">
            <label htmlFor="service-date"> Date of Service: </label>
            <input
              type="date"
              id="service-date"
              name="service-date"
              className="detail-input date-input"
              value={this.state.serviceDate}
              onChange={this.setServiceDate}
            />
          </div>
          <div className="detail-input-format">
            <label htmlFor="eob-date"> EOB Date: </label>
            <input
              type="date"
              id="eob-date"
              name="eob-date"
              className="detail-input date-input"
              value={this.state.eobDate}
              onChange={this.setEobDate}
            />
          </div>
          <div>
            <label htmlFor="payer">Choose a Payer:</label>

            <select name="payer" id="payer">
              <option value="blue cross">Blue Cross</option>
              <option value="humana">Humana</option>
              <option value="aetna">Aetna</option>
              <option value="united health care">United Health Care</option>
            </select>
          </div>
          <div>
            <label htmlFor="claim-number">Claim number:</label>
            <input
              type="text"
              id="claim-number"
              name="claim-number"
              value={this.state.claimNumber}
              onChange={this.setClaimNumber}
            />
          </div>
          <div>
            <label htmlFor="notes">Notes:</label>
            <textarea
              id="notes"
              name="notes"
              value={this.state.notes}
              onChange={this.setNotes}
            />
          </div>
          <div>
            <label htmlFor="denial">Reason for Denial:</label>

            <select name="denial" id="denial">
              <option value="patient responsibility deductible">
                Patient Responsibility/Deductible
              </option>
              <option value="coverage terminated">Coverage Terminated</option>
              <option value="invalid prefix">Invalid Prefix</option>
              <option value="invalid modifier">Invalid Modifier</option>
            </select>
          </div>
          <div>
            <label htmlFor="resolved">Resolved:</label>
            <input
              type="checkbox"
              id="resolved"
              name="resolved"
              onChange={this.setFollowUpDate}
              value={this.state.resolved}
            />
          </div>
          <div className="detail-input-format">
            <label htmlFor="follow-up"> Follow Up Date: </label>
            <input
              type="date"
              id="follow-up-date"
              name="follow-up-date"
              className="detail-input date-input"
              value={this.state.followUpDate}
              onChange={this.setFollowUpDate}
            />
          </div>
          <div>
            <label htmlFor="balance">Remaining Balance:</label>
            <input
              type="text"
              id="balance"
              name="balance"
              value={this.state.balance}
              onChange={this.setBalance}
            />
          </div>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}
