import React, { Component } from 'react'

export default class loop extends Component {
  state = {
    kashif: [
      { id: 1, name: "Kashif", city: "Rawalpindi", hobby: "Football" },
      { id: 2, name: "Asad", city: "Lahore", hobby: "Cricket" },
      { id: 3, name: "Usman", city: "Karachi", hobby: "Hockey" },
      { id: 4, name: "Hanan", city: "Peshawar", hobby: "Hiking" }],

    employe: {
      name: "Kashif",
      id: 1,
      address: "Rawalpindi",
      payroll: 40000,
      imageurl: "https://via.placeholder.com/200x200",

      company: {
        cname: "Burak Institution",
        caddress: "6th road",
        cid: 1,
      },

    }


  };
  render() {
    const { employe } = this.state;



    return (
      <div className="employe-container text-center">
        <h1 className="heading">Employee Details</h1>
        <div className="image-container">
          <img
            src={employe.imageurl}
            alt="Employe"
            className="employe-image"
          />
        </div>
        <div className="info">
          <div>Name: {employe.name}</div>
          <div>Address: {employe.address}</div>
          <div>Payroll: {employe.payroll}</div>
          <div>Company Name: {employe.company.cname}</div>
          <div>Company Address: {employe.company.caddress}</div>
        </div>
      </div>
    );
  }
}