import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form"; // for Form related activities we need this

export default function AddItem() {
  const { register, handleSubmit } = useForm(); //hook to register form
  const onFormSubmit = (data) => console.log(data);// to convert into json data after submitting form

  const onErrors = (errors) => console.error(errors); // if any error happens then this will activate

  return (
    <div>
      <Container className="">
        <h1 className="mx-3"> Add Products</h1>
        <Form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" name="title" {...register("title")} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Description</Form.Label>
            <Form.Control type="text" name="desc" {...register("desc")} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product image</Form.Label>
            <Form.Control type="text" name="image" {...register("image")} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="text" name="price" {...register("price")} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
