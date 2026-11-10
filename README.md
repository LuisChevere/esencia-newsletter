# Esencia — Email Newsletter
## Still a work in progress.

**Restaurant Website:** [https://dineesencia.com](https://dineesencia.com)

## Overview

The Esencia Newsletter is a custom-designed email marketing experience developed for Esencia at the St. Anthony Hotel in San Antonio, Texas.

Built with React Email, the project extends the restaurant's digital identity into email marketing through an editorial, image-driven design.

The visual direction carries the restaurant's established aesthetic into the newsletter, combining sophisticated typography, dark backgrounds, warm gold accents, and carefully composed photography.

## Design Direction

The newsletter follows the visual identity established for the Esencia website.

- **Color palette:** Deep charcoal, muted olive, warm neutrals, and gold accents.
- **Typography:** Editorial serif typography paired with clean sans-serif lettering.
- **Visual approach:** Large-format photography, image-led sections, and minimal design elements.
- **Layout:** Structured email sections with responsive desktop and mobile layouts.
- **Brand consistency:** Visual elements designed to complement the restaurant's website.

## Newsletter Structure

The newsletter uses reusable React Email components to maintain a modular and organized structure.

| Component | Description |
|---|---|
| Header | Restaurant branding, logo, and navigation links. |
| Explore | Editorial introduction and featured message. |
| Featured | Image-based content cards highlighting restaurant offerings and experiences. |
| Footer | Closing information and supporting restaurant links. |

## Features

- Custom-designed HTML email
- React Email component architecture
- Responsive desktop and mobile layouts
- Mobile-specific styling and spacing
- Image-led editorial content
- Custom typography and brand colors
- Hosted image assets
- Email preview and export workflow
- Brevo email testing and delivery integration

## Technology Stack

| Technology | Purpose |
|---|---|
| React 19.2.4 | Component-based development |
| React Email 6.11.0 | Email components, preview, build, and export |
| React DOM 19.2.4 | React rendering |
| React Social Icons 6.27.0 | Social media icons |
| JavaScript (ES Modules) | Application development |

### Development Dependencies

- `@react-email/ui` 6.11.0
- `@types/react` 19.2.14
- `@types/react-dom` 19.2.3

## Project Structure

```text
esencia-newsletter/
│
├── components/
│   ├── Header.jsx
│   ├── Explore.jsx
│   ├── Featured.jsx
│   └── Footer.jsx
│
├── Newsletter.jsx
│
└── package.json
```

*The structure above represents the primary component organization; additional configuration and asset files may be present.*

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project directory:

```bash
cd esencia-newsletter
```

Install dependencies:

```bash
npm install
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the React Email development preview. |
| `npm run build` | Builds the email project. |
| `npm run export` | Exports the email output. |

Start the development preview:

```bash
npm run dev
```

Build the newsletter:

```bash
npm run build
```

Export the newsletter:

```bash
npm run export
```

## Email Compatibility

Email development requires additional consideration compared to standard web development because email clients interpret HTML and CSS differently.

Particular attention is given to:

- Email-compatible HTML structure.
- Table-based layouts.
- Responsive desktop and mobile presentation.
- Image rendering across email clients.
- Mobile typography and spacing.
- Consistent presentation of brand elements.

## Image Hosting

Newsletter photography is hosted on the Esencia website domain to provide publicly accessible image assets.

Example asset location:

```text
https://dineesencia.com/assets/
```

Images used in email campaigns should be publicly accessible over HTTPS and optimized for email delivery.

## Email Testing & Delivery

Brevo is used for email testing and delivery.

The workflow includes:

1. Developing and previewing the newsletter with React Email.
2. Building and exporting the email.
3. Reviewing the layout on desktop and mobile.
4. Sending test emails through Brevo.
5. Checking image rendering and responsive behavior across email clients.
6. Making compatibility adjustments before distribution.

## Project Goals

The objective is to establish a consistent email marketing experience that extends Esencia's visual identity beyond its website.

The newsletter is designed to:

- Communicate restaurant updates and new menu offerings.
- Showcase food, beverages, and the dining atmosphere.
- Maintain consistency with the restaurant's branding.
- Provide an engaging experience across devices.
- Create a reusable foundation for future email campaigns.

## Related Project

**Esencia Restaurant Website:** [https://dineesencia.com](https://dineesencia.com)

---

**Designed and developed by Luis Chevere.**
