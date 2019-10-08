import React, { Component } from "react";
import List from "../components/List.js";
import Form from "../components/Form.js";
import "../styles.css";
import Data from "../data.json";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = { valueData: Data.data, valueResearch: "" };
  }

  handleChange = e => {
    const result = Data.data.filter(item =>
      item.titreItem.toLowerCase().includes(e.currentTarget.value.toLowerCase())
    );

    this.setState({
      valueResearch: e.currentTarget.value.toLowerCase(), //e est l'event
      valueData: result
    });
  };

  render() {
    return (
      <div className="Items">
        <h1> Ma liste d'item </h1>
        <Form
          valueResearch={this.state.valueResearch}
          changeValue={this.handleChange}
        />
        <List data={this.state.valueData} />
      </div>
    );
  }
}

export default Items;
