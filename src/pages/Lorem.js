import React, { Component } from "react";
import "../styles.css";
import Axios from "axios";
import Loader from "../components/Loader.js";

class Lorem extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", isLoading: false };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const response = await Axios.get(
        "https://baconipsum.com/api/?type=meat-and-filler"
      );
      const data = response.data;

      this.setState({ text: data, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false });
      console.log(error);
      throw error;
    }
  }

  render() {
    return (
      <div className="Test">
        <div className="Titre">
          <h1> Lorem Ipsum </h1>
        </div>

        {this.state.isLoading ? <Loader /> : this.state.text}
      </div>
    );
  }
}

export default Lorem;
