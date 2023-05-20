import React from "react";
import Container from "react-bootstrap/Container";
import Calendario from "./calendar";

export default function Reservation() {
  return (
    <Container className="reservation" id="reservations">
    <div>
      <h2>Foglalás</h2>
      <div className="flexreserv">
      <div className="calendar"> <Calendario/> </div>
      <div className="reservtext">
        Amennyiben szeretnéd igénybe venni szolgáltatásunkat, a naptárban van lehetőséged lefoglalni a selfie gépet az adott napra. 
        <br/>Foglalásod követően a lehető leghamarabb kapcsolatba lépünk veled!
      </div>
      </div>
    </div>
    </Container>
  );
}
