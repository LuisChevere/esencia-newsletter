import { Section, Text } from "react-email";
import React from "react";

const dishImage = "https://dineesencia.com/assets/dish_newsletter.jpg";
const drinkImage = "https://dineesencia.com/assets/drink_newsletter.jpg";
const tableImage = "https://dineesencia.com/assets/gallery_newsletter.jpg";

const cards = [
  { image: drinkImage, title: "New Dishes" },
  { image: tableImage, title: "Refined Classics" },
  { image: dishImage, title: "Seasonal Ingredients" },
];

export default function Featured() {
  return (
    <Section style={section}>
      <table
        role="presentation"
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        border="0"
        style={{ tableLayout: "fixed", width: "100%" }}
        className="featured-table"
      >
        <tbody>
          <tr>
            {cards.map((card, index) => (
              <React.Fragment key={card.title}>
                <td
                  width="33%"
                  height="250"
                  valign="bottom"
                  background={card.image}
                  style={cardStyle(card.image)}
                  className="featured-image"
                >
                  <Text style={text} className="featured-text">
                    {card.title}
                  </Text>
                  <hr style={divider} />
                </td>

                {index < cards.length - 1 && (
                  <td width="6" style={desktopGap} className="featured-gap">
                    &nbsp;
                  </td>
                )}
              </React.Fragment>
            ))}
          </tr>
        </tbody>
      </table>
    </Section>
  );
}

const section = {
  backgroundColor: "#202217",
};

const cardStyle = (image) => ({
  backgroundColor: "#14120F",
  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.35), transparent), url("${image}")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "250px",
  padding: "0 0 10px",
});

const text = {
  color: "#FFFFFF",
  fontFamily: "Manrope, Arial, sans-serif",
  letterSpacing: "2px",
  fontSize: "10px",
  lineHeight: "24px",
  textAlign: "center",
  textTransform: "uppercase",
  margin: "0",
  paddingTop: "180px",
};

const divider = {
  border: "none",
  borderTop: "1px solid #D8B56A",
  width: "15%",
  margin: "0 auto",
};

const desktopGap = {
  width: "6px",
  fontSize: "0",
  lineHeight: "0",
  backgroundColor: "#202217",
};
