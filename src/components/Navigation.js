import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { movieAction } from "../redux/action/MovieAction";

// 모든 페이지 상단에 보여지는 Navigation Bar.
function Navigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const search = (event) => {
    event.preventDefault();
    let searchKeyword = event.target[0].value;
    dispatch(movieAction.getSearch(searchKeyword));
    navigate("/movies");
    event.target[0].value = "";
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            width="100"
            src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to={"/"} className="nav-item">
              Home
            </Link>
            <Link to={"/movies"} className="nav-item">
              Movies
            </Link>
          </Nav>
          <Form className="d-flex" onSubmit={search}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button type="submit" variant="outline-danger">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
