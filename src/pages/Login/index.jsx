import reactIcon from 'Assets/img/react-login.svg';
import shoppingIcon from 'Assets/img/shopping-app.svg';
import InputField from 'CustomFields/InputField';
import { FastField, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, FormGroup } from 'reactstrap';
import { login } from 'Slices/auth';
import * as Yup from 'yup';
import './style.scss';

function index() {
  const initialValuesForm1 = { email: '', password: '' };
  const initialValuesForm2 = { emailForgot: '' };
  const [isMode, setIsMode] = useState(false);
  const dispatch = useDispatch();

  const validationSchemaForm1 = Yup.object().shape({
    email: Yup.string().required('This is field is required.'),
    password: Yup.string().required('This is field is required'),
  });

  const validationSchemaForm2 = Yup.object().shape({
    emailForgot: Yup.string().required('This is field is required.'),
  });

  const handleOnSubmitLogin = ({ email, password }) => {
    dispatch(login({ email, password }));
  };

  const handleChangePage = () => {
    setIsMode(!isMode);
  };

  return (
    <div className={`container-1 ${isMode && 'sign-up-mode'}`}>
      <div className="forms-container">
        <div className="login-forgot">
          <div className="login-form">
            <h2 className="title">Sign in</h2>
            <Formik
              validationSchema={validationSchemaForm1}
              initialValues={initialValuesForm1}
              onSubmit={(values) => {
                handleOnSubmitLogin(values);
              }}
            >
              <Form>
                <FastField
                  name="email"
                  component={InputField}
                  placeholder="Email or Username"
                />

                <FastField
                  name="password"
                  component={InputField}
                  type="password"
                  placeholder="Password"
                />

                <FormGroup className="form-group-btn">
                  <Button type="submit" color="primary">
                    Login
                  </Button>
                </FormGroup>
              </Form>
            </Formik>
          </div>

          <div className="forgot-form">
            <h2 className="title">Forgot Password</h2>
            <Formik
              validationSchema={validationSchemaForm2}
              initialValues={initialValuesForm2}
              // onSubmit={(values) => {
              //   handleOnSubmitLogin(values);
              // }}
            >
              <Form>
                <FastField
                  name="emailForgot"
                  component={InputField}
                  placeholder="Email or Username"
                />
                <FormGroup className="form-group-btn">
                  <Button type="button" color="primary">
                    Continue
                  </Button>
                </FormGroup>
              </Form>
            </Formik>
          </div>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content ">
            <h3>Forgot Password?</h3>
            <p>
              To retrieve the password for your account, please click{' '}
              <button
                className="btn transparent"
                type="button"
                onClick={handleChangePage}
              >
                Here!
              </button>
            </p>
          </div>
          <img src={shoppingIcon} className="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content ">
            <h3>Login</h3>
            <p>
              Log in as an administrator to edit your site. Please click{' '}
              <button
                className="btn transparent"
                type="button"
                onClick={handleChangePage}
              >
                here
              </button>{' '}
              to login.
            </p>
          </div>
          <img src={reactIcon} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default index;
