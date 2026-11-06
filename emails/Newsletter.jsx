import { Body, Container, Head, Html, Preview } from "react-email";
import Header from "./components/Header";
import Explore from "./components/Explore";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

const heroImage =
  "https://res.cloudinary.com/ejdnyal9/image/upload/v1791314286/Cinematic_Gourmet_Dish_with_Golden_Pour.png";

export const Newsletter = () => (
  <Html>
    <Head>
      <style type="text/css">{mobileStyles}</style>
    </Head>

    <Preview>Esencia — The Soul of Modern San Antonio</Preview>

    <Body style={main}>
      <Container style={container_color}>
        <Header />
        <Explore />
        <Featured />
        <Footer />
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#2c2c22",
};

const container_color = {
  backgroundColor: "tranparent",
};

const mobileStyles = `

.featured-desktop {
  display: table !important;
  width: 100% !important;
}

.featured-mobile {
  display: none !important;
}

  @media only screen and (max-width: 480px) {
    .email-container {
      width: 100% !important;
      max-width: 100% !important;
    }

    .mobile-heading {
      font-size: 30px !important;
      line-height: 1.2 !important;
    }

    .mobile-image {
      width: 100% !important;
      height: auto !important;
    }

    .mobile-stack {
      display: block !important;
      width: 100% !important;
      font-size: 8px !important
    }

    .email-header {
      width: 100% !important;
    }

    .header-logo,
    .header-nav {
      display: block !important;
      width: 100% !important;
      max-width: 100% !important;
      text-align: center !important;
    }

    .header-logo img {
      margin: 0 auto !important;
    }

    .header-nav {
      padding-top: 16px !important;
      text-align: center !important;
    }

    .hero-cell {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.92) 10%,
        rgba(0, 0, 0, 0.72) 45%,
        rgba(0, 0, 0, 0.15) 100%
      );
      z-index: -1;
    }

       .hr {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      width: 20% !important;
      }

  .featured-row {
    width: 100% !important;
    max-width: 100% !important;
    display: block !important;
  }

  .featured-card {
    display: block !important;
    width: 100% !important;
    max-width: 100% !important;
    height: 200px !important;
    box-sizing: border-box !important;
    padding: 0 !important;
    margin: 0 0 8px !important;
  }

  .featured-text {
    padding-top: 160px !important;
  }

  .navbar {
    display: flex;
    flex-direction: row !important;
    gap: 16px
  }

  .spacing {
  width: 0 !important;
  margin: 0 !important;
  padding: 0 !important
  }

   
.featured-table {
  width: 100% !important;
  table-layout: auto !important;
}

.featured-table tbody,
.featured-table tr {
  display: block !important;
  width: 100% !important;
}

.featured-table td.featured-image {
  display: block !important;
  width: 100% !important;
  height: 200px !important;
  box-sizing: border-box !important;
}

.featured-table td.featured-gap {
  display: block !important;
  width: 100% !important;
  height: 10px !important;
  padding: 0 !important;
  line-height: 10px !important;
}

  
  }
`;

export default Newsletter;
