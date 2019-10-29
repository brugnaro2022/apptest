import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class SigninForm extends Component {
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
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({ form: 'signinForm' })(SigninForm)
