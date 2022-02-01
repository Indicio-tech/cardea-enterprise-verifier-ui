import Axios from 'axios'
import React, { useRef} from 'react'
import {connect} from 'react-redux'
import { useNotification } from './NotificationProvider'


import {
  FormContainer,
  InputBox,
  LogoHolder,
  Logo,
  Form,
  Label,
  SubmitBtn,
  InputField,
} from './CommonStylesForms'

function ForgotPassword(props) {
  const {logo} = props.login

  // Accessing notification context
  const setNotification = useNotification()

  const emailForm = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(emailForm.current)
    const email = form.get('email')

    // Update the DB, show the notification and redirect to the login view
    Axios({
      method: 'POST',
      data: {
        email: email,
        flag: 'password reset',
      },
      url: '/api/user/update',
    }).then((res) => {
      if (res.data.error) {
        setNotification(res.data.error, 'error')
      } else {
        setNotification(
          `The instructions on how to reset the password were sent to ${email}`,
          'notice'
        )
        props.history.push('/')
      }
    })
  }

  return (
    <FormContainer>
      <LogoHolder>
        {logo ? <Logo src={logo} alt="Logo" /> : <Logo />}
      </LogoHolder>
      <Form id="form" onSubmit={handleSubmit} ref={emailForm}>
        <InputBox>
          <Label htmlFor="email">Email</Label>
          <InputField type="email" name="email" id="email" required />
        </InputBox>
        <SubmitBtn type="submit">Reset</SubmitBtn>
      </Form>
    </FormContainer>
  )
}
const mapStateToProps = (state) => state

export default connect(mapStateToProps)(ForgotPassword)
