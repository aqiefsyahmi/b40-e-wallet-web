import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allChecked: false,
      list: [
        { id: 1, name: "item1", isChecked: false },
        { id: 2, name: "item2", isChecked: false },
        { id: 3, name: "item3", isChecked: false },
      ],
    };
  }

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
        <label>{item.name}</label>
      </div>
    ));
  };
  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="checkAll"
          checked={this.state.allChecked}
          onChange={this.handleChange}
        />
        Check all
        <br />
        {this.renderList()}
      </div>
    );
  }
}

export default Box;
