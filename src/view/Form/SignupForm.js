import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

class SignupForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <form role="form" onSubmit={handleSubmit}>
          <div>
            <Field name="name" component="input" />
            <Field name="mail" component="input" />
            <Field name="password" component="input" />
          </div>
          <div>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
        <Link to="/signin">Signin</Link>
      </div>
    )
  }
}

export default reduxForm({ form: 'sigupForm' })(SignupForm)
