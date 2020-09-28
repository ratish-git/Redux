import React, { Component } from "react";
import { connect } from "react-redux";
import { enquiryList } from "../action";
import PropTypes from "prop-types";
import DisplayItems from "../component/Display";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(enquiryList());
  }

  render() {
    return (
      <div>
        <h1>"Practising Redux... Go to Console. To learn More."</h1>
        <DisplayItems dataList={this.props.finalState}></DisplayItems>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { finalState: state.enquiry };
}

Home.prototypes = {
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(Home);
