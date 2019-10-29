import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    return <p>{this.props.amount}</p>
  }
}

const mapStateToProps = state => ({
  amount: state.dashboard.amount
})

export default connect(mapStateToProps)(Dashboard)
