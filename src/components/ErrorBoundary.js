import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error: error,
      info: info
    });
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h4>Oops!! something went wrong.</h4>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;