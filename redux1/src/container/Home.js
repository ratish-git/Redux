import { Component } from "react";
import { connect } from "react-redux";
import { enquiryList } from "../action";
import PropTypes from "prop-types";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(enquiryList());
  }

  render() {
    return "Practising Redux... Go to Console. To learn More.";
  }
}

function mapStateToProps(state) {
  console.log(state);
}

Home.prototypes = {
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(Home);
