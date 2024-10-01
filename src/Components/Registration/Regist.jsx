import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { end_points } from "../../Api/api";
import { useFormik } from "formik";
import axiosInstanse from "../../Api/axiosInstance";
import "./Regits.css"
import { useNavigate } from "react-router-dom";

const Regist = () => {
  let api = end_points.auth;
  let [getEmail, setEmail] = useState([]);
  let navigate=useNavigate()

  const formValidator = (formData) => {
    let err = {};
    if (formData.userName.length < 1) err.userName = "Required Data";
    else if (formData.userName.length < 3) err.userName = "Minimum 3 character";
    if (formData.email.length < 1) err.email = "Required Data";
    else if (formData.email.length < 8) err.email = "Minimum 8character";
    if (formData.password.length < 1) err.password = "Required Data";
    else if (formData.password.length < 8) err.password = "Minimum 8character";
    if (formData.city.length < 1) err.city = "Required Data";
    return err;
  };

  const getDetails = () => {
    axiosInstanse
      .get(api)
      .then((res) => {
        console.log("get data for email verification", res);
        setEmail(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    getDetails();
  }, [setEmail, api]);

  // ==========img upload====================
  const profileImg = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const submitValidator = (formData) => {
    let emailVerify = getEmail.find((val) => val.email === formData.email);

    if (emailVerify) {
      alert("email already used!");
    } else {
      axiosInstanse
        .post(api, formData)
        .then((res) => {
          console.log("res of submit", res.data);
          alert("account created successfully!");
          navigate("/login")
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  let formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      city: "",
      profile_pic: "",
    },
    validate: formValidator,
    onSubmit: submitValidator,
  });
  return (
    <section className="Reg-section">
      <video autoPlay muted loop src="assests/bookshopVideo2.webm"></video>
    <div className="Reg-form-layout">
      <Form onSubmit={formik.handleSubmit} className="regForm">
        <h2><i><u>Registration-form</u></i></h2>
        <br />
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>User Name:-</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.userName && formik.errors.userName ? (
            <p className="text-danger text-end">{formik.errors?.userName}</p>
          ) : (
            ""
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address:-</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-danger text-end">{formik.errors?.email}</p>
          ) : (
            ""
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password:-</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-danger text-end">{formik.errors?.password}</p>
          ) : (
            ""
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCity">
        <Form.Label>City:-</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option>City</option>
            <option value="Delhi">Delhi</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Mumbai">Mumbai</option>
          </Form.Select>
          {formik.touched.city && formik.errors.city ? (
            <p className="text-danger text-end">{formik.errors?.city}</p>
          ) : (
            ""
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImg">
          <Form.Label>Upload Image:-</Form.Label>
          <Form.Control
            type="file"
            placeholder="upload image"
            onChange={(event) => {
              profileImg(event.target.files[0])
                .then((res) => {
                  formik.setFieldValue("profile_pic", res);
                })
                .catch((err) => console.log("axios err", err));
            }}
            accept="image/*"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    
    </section>
  );
};

export default Regist;
