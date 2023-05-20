import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Email() {
    const date = useSelector(state => state.chosenDate.date)

  return (
    <>
    <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Dátum</Form.Label>
        <h6>{date}</h6>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>E-mail cím</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Üzenet:</Form.Label>
        <Form.Control as="textarea" placeholder='Kezdj el gépelni...' rows={3} />
      </Form.Group>

    </Form>

    <Button className='sendbtn'>Küldés</Button>
    </>
  );
}

export default Email