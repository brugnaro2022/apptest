// @flow
import React, { Component } from 'react'

import SignupForm from '../Form/SignupForm'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { signup } from '../../store/actions/LoginActions'

import styles from 'styled-components'

const Container = styles.div`
  align-items: center;
  display: flex;
  height: 80vh;
  justify-content: center
`

const Content = styles.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
`

const Text = styles.p`
  margin: 0px
`
class Signup extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>Sign up</Text>
          <SignupForm onSubmit={this.props.signup} />
        </Content>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ signup }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Signup)
