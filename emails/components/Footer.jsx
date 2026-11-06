import { Section, Img, Text } from "react-email";

const footerImage = "https://dineesencia.com/assets/newsletter-footer.jpg";

const instaLogo = "https://dineesencia.com/assets/Insta.png";
const fbLogo = "https://dineesencia.com/assets/FB.png";
const calLogo = "https://dineesencia.com/assets/Cal.png";

const Footer = () => {
  return (
    <Section style={footer}>
      <table
        role="presentation"
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        border="0"
        background={footerImage}
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundImage: `url("${footerImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          margin: "0 auto",
        }}
      >
        <tbody>
          <tr>
            <td
              background={footerImage}
              style={{
                padding: "20px 20px 50px",
                backgroundImage: `url("${footerImage}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                textAlign: "center",
              }}
            >
              <Text style={footerTitle}>The Soul of Modern San Antonio</Text>

              <hr style={divider} />

              <table
                role="presentation"
                align="center"
                cellPadding="0"
                cellSpacing="0"
                border="0"
                style={col}
              >
                <tbody>
                  <tr>
                    <td width="35" align="center" style={logoCell}>
                      <Img
                        src={instaLogo}
                        alt="Instagram"
                        width="20"
                        style={logos}
                      />
                    </td>
                    <td width="35" align="center" style={logoCell}>
                      <Img
                        src={fbLogo}
                        alt="Facebook"
                        width="20"
                        style={logos}
                      />
                    </td>
                    <td width="35" align="center" style={logoCell}>
                      <Img
                        src={calLogo}
                        alt="Reservations"
                        width="20"
                        style={logos}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
};

const footer = {
  backgroundColor: "#14120F",
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
};

const footerTitle = {
  color: "#FFFFFF",
  fontFamily: "'Manrope', sans-serif",
  fontSize: "12px",
  lineHeight: "24px",
  letterSpacing: "3px",
  textAlign: "center",
  textTransform: "uppercase",
  paddingTop: "7.5px",
};

const divider = {
  border: "none",
  borderTop: "1px solid #D8B56A",
  width: "5%",
  marginTop: "10px",
};

const logos = {
  display: "block",
  width: "20px",
  height: "auto",
  border: "0",
};

const col = {
  margin: "0 auto",
  borderCollapse: "collapse",
};

const logoCell = {
  width: "35px",
  padding: "10px 7.5px 20px",
  textAlign: "center",
};

export default Footer;
