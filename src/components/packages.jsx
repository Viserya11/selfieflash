import SinglePackage from "./package";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Packages() {
  return (
    <Container id="packages">
      <Row>
        <Col>
          {" "}
          <SinglePackage name="Kis csomag" description="Örökíts meg minden pillanatot és nyomtass is ki minden képet, egyszerre akár 4 példányban.

Ezzel a választással nem kell válogatnod a lencsevégre kapott élményekből, mivel a teljes időtartam alatt minden képről készíthetsz kézzel fogható és maradandó emléket is, így nem kell azzal tölteni az időt, hogy a legjobb pillanatképet kiválaszd." />
        </Col>
        <Col>
          <SinglePackage name="Közepes csomag" description="Örökíts meg minden pillanatot és nyomtass is ki minden képet, egyszerre akár 4 példányban.

Ezzel a választással nem kell válogatnod a lencsevégre kapott élményekből, mivel a teljes időtartam alatt minden képről készíthetsz kézzel fogható és maradandó emléket is, így nem kell azzal tölteni az időt, hogy a legjobb pillanatképet kiválaszd." />
        </Col>
        <Col>
          <SinglePackage
            name="Korlátlan csomag"
            description="Örökíts meg minden pillanatot és nyomtass is ki minden képet, egyszerre akár 4 példányban.
              Ezzel a választással nem kell válogatnod a lencsevégre kapott élményekből, mivel a teljes időtartam alatt minden képről készíthetsz kézzel fogható és maradandó emléket is, így nem kell azzal tölteni az időt, hogy a legjobb pillanatképet kiválaszd.*"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Packages;
