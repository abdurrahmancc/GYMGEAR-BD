import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container mt-5">
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional content.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This card has even longer content than the first to show that equal height
              action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Blogs;
