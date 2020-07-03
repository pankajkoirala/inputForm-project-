import React from "react";
import { Formik } from "formik";
import { Label, Input } from "reactstrap";
import { FormData } from "../utility/formValitation";

const FormComponent = (props) => (
  <div className="container  row d-flex justify-content-center">
    <Formik
      initialValues={{
        species: "",
        rarity: "",
        notes: "",
        picture:"",
      }}
      onSubmit={(values, action) => {
        props.save(values);        
      }}
      validationSchema={FormData}
    >
      {({
        values,
        errors,
        touched,
        handleReset,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,

        isSubmitting,
      }) => (
        <form className=" bg-primary  rounded border border-primary h-80 w-50  p-4 col-md-6 mt-4 ">
          <h4>Please Enter Following Information</h4>
          <div className="p-3">
            <Label>species</Label>
            <Input
              type="text"
              name="species"
              placeholder="enter your name"
              value={values.species}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.species && errors.species && (
              <span
                className="text-danger col-md-12 text-left mb-2"
                style={{ fontSize: 12 }}
              >
                {errors.species}
              </span>
            )}
          </div>

          <div className=" p-3">
            <Label for="exampleSelect">Rarity</Label>
            <Input
              type="select"
              name="rarity"
              value={values.rarity}
              id="exampleSelect"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">please enter</option>
              <option value="common">Common</option>
              <option value="rare">Rare</option>
              <option value="extremely rare">Very Rare</option>
            </Input>
            {touched.rarity && errors.rarity && (
              <span
                className="text-danger col-md-12 text-left mb-2"
                style={{ fontSize: 12 }}
              >
                {errors.rarity}
              </span>
            )}
          </div>

          <div className=" p-3">
            <Label for="exampleCity">Note</Label>
            <Input
              type="text"
              name="notes"
              value={values.notes}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.notes && errors.notes && (
              <span
                className="text-danger col-md-12 text-left mb-2"
                style={{ fontSize: 12 }}
              >
                {errors.notes}
              </span>
            )}
          </div>

          <div className="mt-4  p-3">
            <Label className="float-left">Photo</Label>
            <Input
              type="file"
              name="picture"
              accept="image/*"
              onChange={(event) => {
                setFieldValue("picture", event.currentTarget.files[0]);
              }}
            />

            {touched.picture && values.picture && (
              <img
                src={URL.createObjectURL(values.picture)}
                alt="no picture"
                height="20"
              />
            )}
          </div>          
          <button
            type="submit"
            name="submit"
            className="btn-success btn-lg"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button className="btn-danger btn-lg"  onClick={handleReset}>
            Cancle
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default FormComponent;
