import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Form, Modal } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function Email({ onEmailSent }) {
  const date = useSelector(state => state.chosenDate.date);
  
  const [formData, setFormData] = useState({
    from_name: '',
    user_email: '',
    message: ''
  });

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e.target);
  }

  const sendEmail = (form) => {
    emailjs.sendForm('selfieflash1', 'template_1f9odak', form, 'p4NnfvmWFjhoVBRa8')
      .then((result) => {
        console.log(result.text);
        setFormData({
          from_name: '',
          user_email: '',
          message: ''
        });
       
        setShowModal(true);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Dátum</Form.Label>
          <h6 name="user_date">{date}</h6>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Név</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add meg a neved"
            name="from_name"
            value={formData.from_name}
            onChange={(e) => setFormData({...formData, from_name: e.target.value})}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>E-mail cím</Form.Label>
          <Form.Control
            type="email"
            placeholder="Add meg az e-mail címed"
            name="user_email"
            value={formData.user_email}
            onChange={(e) => setFormData({...formData, user_email: e.target.value})}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Üzenet:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder='Kezdj el gépelni...'
            rows={3}
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </Form.Group>
        <Button className='sendbtn' type="submit">Küldés</Button>
      </Form>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Siker!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Email sikeresen elküldve.</Modal.Body>
      </Modal>
    </>
  );
}

export default Email;

