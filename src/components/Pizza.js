import React from "react";
import {Button,Card,CardDeck,Container,ListGroup,Accordion} from "react-bootstrap";
import pizza1 from "../pictures/pizza1.jpg";
import pizza2 from "../pictures/pizza2.jpg";
import pizza3 from "../pictures/pizza3.jpg";

const Pizza=()=>{

	return(
		<Container>
			<div>
				<h2 className="otsikko">Pizza</h2>
				<CardDeck>
					<Card style={{ width: "18rem",float:"left" }}>
						<Card.Img variant="top" src={pizza1} />
						<Card.Body>
							<Card.Title>Pizza Opera</Card.Title>
							<Accordion defaultActiveKey="0">
								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button} variant="link" eventKey="1">
        Show ingredients
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="1">
										<ListGroup>
											<ListGroup.Item>Cras justo odio</ListGroup.Item>
											<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
											<ListGroup.Item>Morbi leo risus</ListGroup.Item>
											<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
											<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
										</ListGroup>
									</Accordion.Collapse>
								</Card>
							</Accordion>

						</Card.Body>
					</Card>
					<Card style={{ width: "18rem", float:"center" }}>
						<Card.Img variant="top" src={pizza2} />
						<Card.Body>
							<Card.Title>Pizza Napoli</Card.Title>
							<Accordion defaultActiveKey="0">
								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button} variant="link" eventKey="1">
        Show ingredients
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="1">
										<ListGroup>
											<ListGroup.Item>Cras justo odio</ListGroup.Item>
											<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
											<ListGroup.Item>Morbi leo risus</ListGroup.Item>
											<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
											<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
										</ListGroup>
									</Accordion.Collapse>
								</Card>
							</Accordion>

						</Card.Body>
					</Card>
					<Card style={{ width: "18rem", float:"right" }}>
						<Card.Img variant="top" src={pizza3} />
						<Card.Body>
							<Card.Title>Vegetariana</Card.Title>
							<Accordion defaultActiveKey="0">
								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button} variant="link" eventKey="1">
        Show ingredients
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="1">
										<ListGroup>
											<ListGroup.Item>Cras justo odio</ListGroup.Item>
											<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
											<ListGroup.Item>Morbi leo risus</ListGroup.Item>
											<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
											<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
										</ListGroup>
									</Accordion.Collapse>
								</Card>
							</Accordion>

						</Card.Body>
					</Card>
				</CardDeck>
				<br/><br/><br/><br/><br/>
			</div>
		</Container>
	);
};

export default Pizza;