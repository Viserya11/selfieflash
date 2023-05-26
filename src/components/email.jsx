import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function Email({ onEmailSent }) {
  const date = useSelector(state => state.chosenDate.date);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e.target);
  }

  const sendEmail = (form) => {
    emailjs.sendForm('selfieflash1', 'template_1f9odak', form, 'p4NnfvmWFjhoVBRa8')
      .then((result) => {
        console.log(result.text);
        onEmailSent(); // call the onEmailSent prop when email is successfully sent
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Dátum</Form.Label>
        <h6 name="user_date">{date}</h6>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Név</Form.Label>
        <Form.Control type="text" placeholder="Add meg a neved" name="user_name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>E-mail cím</Form.Label>
        <Form.Control type="email" placeholder="Add meg az e-mail címed" name="user_email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Üzenet:</Form.Label>
        <Form.Control as="textarea" placeholder='Kezdj el gépelni...' rows={3} name="message" />
      </Form.Group>
      <Button className='sendbtn' type="submit">Küldés</Button>
    </Form>
  );
}

export default Email;
