import { Navbar, Container, Nav, Card, Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export function Norute() {
  return (
    <div>
      <h1>Page not found :/</h1>
    </div>
  );
}

export function Barra() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Explore Cities</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/Metroville">
            Metroville
          </Nav.Link>
          <Nav.Link as={Link} to="/RiverCity">
            RiverCity
          </Nav.Link>
          <Nav.Link as={Link} to="/CoastalTown">
            CoastalTown
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export function Home() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <div>
      <h1>Cities</h1>
      <Card>
        <Card.Body>
          <Card.Title>Metroville</Card.Title>
          <Card.Text>
            A sprawling metropolitan area known for its high-tech industry and
            vibrant arts scene.
          </Card.Text>
          <Button variant="primary">
            <Link to="/Metroville" style={linkStyle}>
              Explore Metroville
            </Link>
          </Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>RiverCity</Card.Title>
          <Card.Text>
            Famous for its riverside cafes and bohemian neighborhoods.
          </Card.Text>
          <Button variant="primary">
            <Link to="/RiverCity" style={linkStyle}>
              Explore River City
            </Link>
          </Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>CoastalTown</Card.Title>
          <Card.Text>
            A beautiful seaside town with a laid-back atmosphere.
          </Card.Text>
          <Button variant="primary">
            <Link to="/CoastalTown" style={linkStyle}>
              Explore Coastal Town
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export function Metroville() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Metroville</Card.Title>
          <Card.Text>
            A sprawling metropolitan area known for its high-tech industry and
            vibrant arts scene.
          </Card.Text>
          <div>
            <Button variant="primary" style={{ marginRight: "10px" }}>
              <Link to="park" style={linkStyle}>
                Tech Park
              </Link>
            </Button>
            <Button variant="primary">
              <Link to="art" style={linkStyle}>
                Art Museum
              </Link>
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Outlet />
    </>
  );
}
export function Art() {
  return (
    <>
      <h1>Feature: Art Museum</h1>
      <p>Enjoy our big and beautiful museum</p>
    </>
  );
}

export function Park() {
  return (
    <>
      <h1>Feature: Tech Park</h1>
      <p>Home to leading tech companies and startups</p>
    </>
  );
}

export function RiverCity() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>River City</Card.Title>
          <Card.Text>
            Famous for its riverside cafes and bohemian neighborhoods.
          </Card.Text>
          <div>
            <Button variant="primary" style={{ marginRight: "10px" }}>
              <Link to="park" style={linkStyle}>
                Boat ride
              </Link>
            </Button>
            <Button variant="primary">
              <Link to="art" style={linkStyle}>
                Views
              </Link>
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Outlet />
    </>
  );
}

export function Ride() {
  return (
    <>
      <h1>Feature: Boat Ride</h1>
      <p>Enjoy a beautiful trip along the river</p>
    </>
  );
}

export function Views() {
  return (
    <>
      <h1>Feature: Views</h1>
      <p>
        Enjoy beautiful views where you can take photos and spend time with your
        family.
      </p>
    </>
  );
}

export function CoastalTown() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Coastal Town</Card.Title>
          <Card.Text>
            A beautiful seaside town with a laid-back atmosphere.
          </Card.Text>
          <Button variant="primary" style={{ marginRight: "10px" }}>
            <Link to="roast" style={linkStyle}>
              Roast meat
            </Link>
          </Button>
        </Card.Body>
      </Card>
      <Outlet />
    </>
  );
}
export function Roast() {
  return (
    <>
      <h1>Feature: Roast Meat</h1>
      <p>
        A place where you can have a barbecue with family, friends and have a
        good time
      </p>
    </>
  );
}

