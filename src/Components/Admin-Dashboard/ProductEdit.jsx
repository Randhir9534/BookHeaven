import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { end_points } from "../../Api/api";
import axiosInstanse from "../../Api/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
  let { id } = useParams();
  let api = end_points.books + "/" + id;
  console.log("edit api", api);
  let [data, setData] = useState([]);
  let navigate=useNavigate()

  let getData_forEdit = () => {
    axiosInstanse
      .get(api)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData_forEdit();
  }, [setData, api]);

  const formValidate = (formData) => {
    let err = {};
    if (formData.name.length < 1) err.name = "Required Data";
    if (formData.writer.length < 1) err.writer = "Required Data";
    if (formData.price.length < 1) err.price = "Required Data";
    if (formData.description.length < 1) err.description = "Required Data";
    if (formData.genre.length < 1) err.genre = "Required Data";
    return err;
  };

  const uploadImg=(file)=>
    new Promise((resolve,reject)=>{
      const reader=new FileReader()
      reader.readAsDataURL(file)
      reader.onload=()=>resolve(reader.result)
      reader.onerror=reject
    })
  const formSubmit=(editData)=>{
    axiosInstanse.put(api,editData)
    .then((res)=>{
        console.log("res",res);
        navigate("/admin")
        
    })
    .catch(err=>console.log(err)
    )
  }

  let formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: data?.name,
      writer: data?.writer,
      price: data?.price,
      img: data?.img,
      description: data?.description,
      genre: data?.genre,
    },
    validate: formValidate,
    onSubmit: formSubmit,
  });

  return (
    <div>
      <section className="bookSection">
        <div className="form">
          <Form className="formData" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name:-</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors?.name ? (
                <p className="text-end text-warning">{formik.errors?.name}</p>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicWriter">
              <Form.Label>Writer:-</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter writer name"
                name="writer"
                value={formik.values.writer}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.writer && formik.errors?.writer ? (
                <p className="text-end text-warning">{formik.errors?.writer}</p>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price:-</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.price && formik.errors?.price ? (
                <p className="text-end text-warning">{formik.errors?.price}</p>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.description && formik.errors?.description ? (
                <p className="text-end text-warning">
                  {formik.errors?.description}
                </p>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGenre">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Genre"
                name="genre"
                value={formik.values.genre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.genre && formik.errors?.genre ? (
                <p className="text-end text-warning">{formik.errors?.genre}</p>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImg">
              <Form.Label>upload Img</Form.Label>
              <Form.Control
                type="file"
                placeholder="upload img"
                name="img"
                onChange={(event) => {
                  uploadImg(event.target.files[0])
                    .then((res) => {
                      formik.setFieldValue("img", res);
                    })
                    .catch((err) => console.log(err));
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
    </div>
  );
};

export default ProductEdit;
