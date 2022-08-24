import React, { Component } from "react";

import Router, { useRouter } from "next/router";
import Layout from "../components/Layout";
import Input from "../components/Input";

class addWallet1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allChecked: false,
      list: [
        {
          id: "000001",
          name: "Ahmad Utat1",
          icnum: "010323045890",
          balance: "RM0",
          isChecked: false,
        },
        {
          id: "000002",
          name: "Ahmad Utat2",
          icnum: "010323045890",
          balance: "RM0",
          isChecked: false,
        },
        {
          id: "000003",
          name: "Ahmad Utat3",
          icnum: "010323045890",
          balance: "RM0",
          isChecked: false,
        },
        {
          id: "000004",
          name: "Ahmad Utat4",
          icnum: "010323045890",
          balance: "RM0",
          isChecked: false,
        },
      ],
    };
  }

  linkrouter = () => {
    const router = useRouter();
  };

  handleChange = (e) => {
    let itemName = e.target.name;
    let checked = e.target.checked;
    this.setState((prevState) => {
      let { list, allChecked } = prevState;
      if (itemName === "checkAll") {
        allChecked = checked;
        list = list.map((item) => ({ ...item, isChecked: checked }));
      } else {
        list = list.map((item) =>
          item.name === itemName ? { ...item, isChecked: checked } : item
        );
        allChecked = list.every((item) => item.isChecked);
      }
      return { list, allChecked };
    });
  };

  renderList = () => {
    return this.state.list.map((item) => (
      <div>
        <input
          key={item.id}
          type="checkbox"
          name={item.name}
          value={item.name}
          checked={item.isChecked}
          onChange={this.handleChange}
        />
      </div>
    ));
  };

  renderName = () => {
    return this.state.list.map((item) => (
      <div>
        <label>{item.name}</label>
      </div>
    ));
  };

  renderMatric = () => {
    return this.state.list.map((item) => (
      <div>
        <label>{item.id}</label>
      </div>
    ));
  };

  renderIcNum = () => {
    return this.state.list.map((item) => (
      <div>
        <label>{item.icnum}</label>
      </div>
    ));
  };

  renderBalance = () => {
    return this.state.list.map((item) => (
      <div>
        <label>{item.balance}</label>
      </div>
    ));
  };

  render() {
    return (
      <Layout>
        <div className="mt-4 w-2/3 items-center">
          <form>
            <Input
              type="search"
              placeholder="Search for name, matric number, ic number"
            />
          </form>
          <div className="mt-6 font-medium">
            <p>
              Select All&nbsp;
              <input
                type="checkbox"
                name="checkAll"
                checked={this.state.allChecked}
                onChange={this.handleChange}
              />
            </p>
          </div>
          <div className="mt-4 p-4 pt-0 border-[1px] rounded-md bg-[#FFFFFF] border-gray-300">
            <table className="centertable">
              <thead>
                <tr>
                  <td className="pt-4 pb-3 w-[7%]">Select</td>
                  <td>Name</td>
                  <td>Matric Number</td>
                  <td>IC Number</td>
                  <td>Balance</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1 text-center w-[7%]">
                    {this.renderList()}
                  </td>
                  <td>{this.renderName()}</td>
                  <td>{this.renderMatric()}</td>
                  <td>{this.renderIcNum()}</td>
                  <td>{this.renderBalance()}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <div className="w-[4rem]">
              <Input type="number" />
            </div>
            <button
              className="py-2 px-5 font-medium bg-[#FFD400] rounded-md"
              type="submit"
              onClick={() =>
                this.linkrouter(
                  "/dashboard",
                  alert("Student Wallet Point Updated")
                )
              }
            >
              Add Point
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default addWallet1;
