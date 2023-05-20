import SinglePackage from "./package";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Packages() {
    return ( <Container id="packages">
        <Row>
          <Col> <SinglePackage name="csomag 1" description="lorem"/></Col>
          <Col><SinglePackage name="csomag 2" description="ipsum"/></Col>
          <Col><SinglePackage name="csomag 3" description="bs"/></Col>
        </Row>
      </Container>);
}

export default Packages;