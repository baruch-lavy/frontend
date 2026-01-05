import { Button, TextField} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { toyService } from "../services/toy.service";
import { saveToy } from "../store/actions/toy.action";

export function ToyEdit() {
  const [toyToEdit, setToyToEdit] = useState(toyService.getEmptyToy());

  const { toyId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!toyId) return;
    loadToy();
  }, []);

  function loadToy() {
    toyService
      .getById(toyId)
      .then((toy) => setToyToEdit(toy))
      .catch((err) => {
        console.log("had issues in toy edit:", err);
        navigate("/toy");
      });
  }

  const toySchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required')
        .min(2, 'Too Short')
        .max(20, 'Too Long'),
    price: Yup.number()
        .required('Price is required')
        .min(1, 'Price must be at least 1')

  })

  function onSaveToy(values, { setSubmitting }) {
    saveToy(values)
        .then(() => {
            navigate('/toy')
        })
        .catch(err => {
            console.log('Problem saving toy' , err);
        })
        .finally(() => {
            setSubmitting(false)
        })

  }

  return (
    <section className="toy-edit">
        <h2>{toyToEdit._id ? 'Edit' : 'Add'}</h2>
        <Formik
            enableReinitialize
            initialValues={toyToEdit}
            validationSchema={toySchema}
            onSubmit={onSaveToy}
        >

          {({ errors, touched, values, handleChange}) => (
            <Form>
                <Field
                    as={TextField}
                    lable='Name'
                    variant='outlined'
                    name='name'
                    required
                    margin='normal'
                    error={touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                    onChange={handleChange}
                    value={values.name}
                />
                <Field
                    as={TextField}
                    lable='Price'
                    variant='outlined'
                    type='number'
                    name='price'
                    required
                    margin='normal'
                    inputProps={{ min: 1 }}
                    error={touched.price && !!errors.price}
                    helperText={touched.price && errors.price}
                    onChange={handleChange}
                    value={values.price}
                />

                <Button variant="contained" color="primary" type="submit">
                    {toyToEdit._id ? 'Save' : 'Add'}
                </Button>
            </Form>
          )}
        </Formik>
    </section>
  )
}
