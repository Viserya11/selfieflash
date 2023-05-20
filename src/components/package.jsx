import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pack from "./package.png"

function SinglePackage(props) {
        return (
          <Card style={{ width: '18rem', border: '0px black solid', textAlign: "justify" }}>
            <Card.Img variant="top" src={pack} />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
              {props.description}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      }
      

export default SinglePackage;