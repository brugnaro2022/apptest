// @flow
import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import SigninForm from '../Form/SigninForm'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { signin } from '../../store/actions/LoginActions'

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

class Signin extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>Sign in</Text>
          <SigninForm onSubmit={this.props.signin} />
          <Link to="/signup">Cadastre-se</Link>
        </Content>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ signin }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Signin)
