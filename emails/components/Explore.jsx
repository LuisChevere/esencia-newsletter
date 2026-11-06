import { Section, Text, Button } from "react-email";

const Explore = () => {
  return (
    <Section style={section}>
      <table
        role="presentation"
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        border="0"
      >
        <tbody>
          <tr>
            <td align="center">
              <Text style={textbody}>
                Our new menu celebrates the cultures, ingredients, and
                <br />
                influences that shape Esencia, where Mexican and Chinese
                <br />
                heritage, Spanish influence, and South Texas traditions
                converge.
              </Text>

              <table
                role="presentation"
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                border="0"
              >
                <tbody>
                  <tr>
                    <td align="center" style={{ textAlign: "center" }}>
                      <Button
                        href="https://dineesencia.com/"
                        target="_blank"
                        style={menu}
                      >
                        Explore The Menu &rarr;
                      </Button>
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

const section = {
  backgroundColor: "#202217",
  paddingBottom: "25px",
  paddingTop: "10px",
};

const textbody = {
  color: "#FFFFFF",
  fontFamily: "'Times New Roman', Georgia, serif",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "1.6",
  letterSpacing: "2px",
  textAlign: "center",
  fontStyle: "italic",
};

const menu = {
  backgroundColor: "transparent",
  color: "#FFFFFF",
  fontFamily: "'Manrope', sans-serif",
  textTransform: "uppercase",
  letterSpacing: "3px",
  width: "200px",
  fontSize: "8px",
  display: "inline-block",
  textAlign: "center",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "#D8B56A",
  padding: "12px 8px",
  textDecoration: "none",
};

export default Explore;
