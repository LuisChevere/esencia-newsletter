import { Section, Text } from "react-email";
import Nav from "./Navbar";

const heroImage = "https://dineesencia.com/assets/newsletter_hero.jpg";

const Header = () => {
  return (
    <Section style={outer}>
      <table
        role="presentation"
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        border="0"
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#14120F",
        }}
      >
        <tbody>
          <tr>
            <td
              valign="top"
              background={heroImage}
              style={heroBackground}
              className="mobile-image"
            >
              <Nav />
              <Section style={heroCell} className="hero-cell">
                <Text style={texthead}>A New Season.</Text>

                <Text style={header}>
                  A New
                  <br />
                  Menu.
                </Text>

                <hr style={divider} className="hr" />

                <Text style={textbody}>
                  Familiar Roots.
                  <br />
                  Bolder Flavors.
                  <br />
                  The Next Chapter
                  <br />
                  At Esencia.
                </Text>
              </Section>
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
};

const outer = {
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
};

const heroBackground = {
  backgroundImage: `url("${heroImage}")`,
  backgroundSize: "600px 480px",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
};

const heroTable = {
  margin: "0 auto",
  backgroundColor: "transparent",
};

const heroCell = {
  padding: "20px 30px 80px",
  backgroundColor: "transparent",
};

const texthead = {
  color: "#FFFFFF",
  fontFamily: "'Manrope', sans-serif",
  fontSize: "13px",
  lineHeight: "20px",
  textTransform: "uppercase",
  letterSpacing: "5px",
  textShadow: "0 2px 12px rgba(0,0,0,.9)",
};

const header = {
  color: "#D8B56A",
  fontFamily: "'Bodoni Moda', serif",
  fontSize: "60px",
  letterSpacing: "3px",
  lineHeight: "0.92",
  fontWeight: "400",
  textTransform: "uppercase",
  margin: "0 0 0px",
  textShadow: "0 2px 18px rgba(0,0,0,.9)",
};

const divider = {
  border: "none",
  borderTop: "1px solid #D8B56A",
  width: "10%",
  justifyItem: "start",
  marginLeft: 0,
};

const textbody = {
  color: "#FFFFFF",
  fontFamily: "'Manrope', sans-serif",
  fontSize: "10px",
  lineHeight: "1.9",
  textTransform: "uppercase",
  letterSpacing: "3px",
  textShadow: "0 2px 12px rgba(0,0,0,.9)",
};

export default Header;
