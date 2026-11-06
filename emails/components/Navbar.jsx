import { Section, Row, Column, Img, Link } from "react-email";

const Navbar = () => {
  return (
    <Section style={Nav} className="email-header">
      <Row>
        <Column className="header-logo">
          <Img
            alt="Esencia"
            height="30px"
            src="https://dineesencia.com/assets/esencia-name-jW-W2cp9.png"
          />
        </Column>

        <Column align="right" className="header-nav">
          <Link href="https://dineesencia.com/" style={Links}>
            Dine
          </Link>

          <span style={Divider}> | </span>

          <Link href="https://dineesencia.com/" style={Links}>
            Menu
          </Link>

          <span style={Divider}> | </span>

          <Link
            href="https://www.opentable.com/r/esencia-san-antonio"
            target="_blank"
            style={Links}
          >
            Reservations
          </Link>
        </Column>
      </Row>
    </Section>
  );
};

const Nav = {
  marginTop: "20px",
  marginBottom: "20px",
  padding: "0 20px",
};

const Links = {
  fontFamily: "Arial, sans-serif",
  color: "#FFFFFF",
  textDecoration: "none",
  textTransform: "uppercase",
  fontSize: "8px",
  letterSpacing: "2px",
};

const Divider = {
  color: "#D8B56A",
  padding: "0 6px",
};

export default Navbar;
