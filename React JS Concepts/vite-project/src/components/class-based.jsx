import { Component } from "react";

class ClassBasedComponent extends Component {
  state = {
    showText: false,
    changeColor: false,
    count: 0,
    changeCountStyle: false,
  };

  handleClick = (click) => {
    console.log("Button clicked !!");

    const { showText, changeColor } = this.state;

    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  };

  handleCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    console.log("This is called first time when the page is loaded");
    this.setState({
      showText: !this.state.showText,
      changeColor: !this.state.changeColor,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state);

    if (prevState.count !== this.state.count && this.state.count === 10) {
      this.setState({
        ...this.state,
        changeCountStyle: !this.state.changeCountStyle,
      });
    }
  }

  componentWillUnmount() {
    console.log("Component is getting destroyed");
  }

  render() {
    const { showText, changeColor, count } = this.state;
    return (
      <div>
        {showText ? (
          <h3 style={{ color: changeColor ? "blue" : "black" }}>
            Text is visible now since you clicked the button
          </h3>
        ) : null}
        <h3>Class based component</h3>
        <button
          onClick={this.handleClick}
          style={{
            color: "white",
            backgroundColor: "purple",
            padding: "10px",
            fontSize: "18px",
            margin: "10px",
          }}
        >
          Toggle text
        </button>
        <button
          onClick={this.handleCount}
          style={{
            color: "white",
            backgroundColor: this.state.changeCountStyle ? "blue" : "purple",
            padding: "10px",
            fontSize: "18px",
            margin: "10px",
          }}
        >
          Increase count value
        </button>
        <h3>Counter : {count}</h3>
        {this.state.changeCountStyle ? <h4>Count crossed 10</h4> : null}
      </div>
    );
  }
}

export default ClassBasedComponent;
