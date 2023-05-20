import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pack from "./package.png"

function SinglePackage(props) {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pack} />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
              {props.description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      }
      

export default SinglePackage;