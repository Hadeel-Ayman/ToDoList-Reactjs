import React from "react";
import "./style.css";


export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="ErrorText">Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
