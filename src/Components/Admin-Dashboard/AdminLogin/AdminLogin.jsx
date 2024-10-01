import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { end_points } from "../../../Api/api";
import axiosInstanse from "../../../Api/axiosInstance";
// import "./Login.css";

const AdminLogin = () => {
  let api = end_points.adminLoin;
  console.log("login api", api);
  let [state, setState] = useState([]);
  let navigate = useNavigate();

  const formValidator = (formData) => {
    let err = {};
    if (formData.email.length < 1) {
      err.email = "Required field";
    } else if (formData.email < 6) {
      err.email = "Minimum 6 character";
    }
    if (formData.password.length < 1) {
      err.password = "Required field";
    } else if (formData.password.length < 8) {
      err.password = "Minimum 8 character";
    }

    return err;
  };
  const getData = () => {
    axiosInstanse
      .get(api)
      .then((res) => {
        console.log(res);
        setState(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, [setState, api]);

  const submitValidator = (formData) => {
    console.log("formData", formData);
    let mail = state.find((val) => val.email === formData.email);
    let pass = state.find((val) => val.password === formData.password);
    // console.log("pass",pass);

    window.sessionStorage.setItem("user", JSON.stringify(state));
    // window.sessionStorage.setItem("loggedin",true)
    if (!mail) {
      alert("Entered email is wrong!");
    } else if (!pass) {
      alert("Entered password is wrong!");
    } else {
      alert("Logged in successfully!");
      navigate("/admin");
    }
  };

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: formValidator,
    onSubmit: submitValidator,
  });
  return (
    <div>
      <div className="login-layout ">
        <div>
          <section className="text-start d-flex justify-content-center p-5">
            <Form onSubmit={formik.handleSubmit} className="border p-5">
              <h4 className="text-center">
                <i>
                  <b>Log-in</b>
                </i>
              </h4>
              <hr />

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors?.email ? (
                  <p className="text-end text-danger">{formik.errors?.email}</p>
                ) : (
                  ""
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  // autoComplete="false"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors?.password ? (
                  <p className="text-end text-danger">
                    {formik.errors?.password}
                  </p>
                ) : (
                  ""
                )}
              </Form.Group>

              <div className="d-flex justify-content-end mt-3">
                <Link className="m-2" to={"/regist"}>
                  Sign-up
                </Link>
                <Button
                  variant="outline-info"
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid)}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
