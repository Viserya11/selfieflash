import React from "react";
import Container from "react-bootstrap/Container";
import Calendario from "./calendar";

export default function Reservation() {
  return (
    <Container className="reservation">
    <div>
      <h2>Reservation</h2>
      <div className="flexreserv">
      <div className="calendar"> <Calendario/> </div>
      <div className="reservtext">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illum
        facilis magni nemo nulla odit nihil delectus obcaecati amet cupiditate,
        ea autem libero fugiat provident. Molestias libero dolor voluptate
        dolores.
      </div>
      </div>
    </div>
    </Container>
  );
}
