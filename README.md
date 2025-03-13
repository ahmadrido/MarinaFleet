# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# 🚢 Marina Fleet

A comprehensive ship reservation platform with integrated tour booking capabilities.

## Overview

Marina Fleet is a seamless web application designed to streamline the process of booking maritime transportation and tours. This project provides an intuitive interface for users to browse available vessels, compare options, and secure their bookings with ease.

## Features

- **Ship Reservation System**: Browse and book various types of vessels
- **Tour Package Integration**: Discover and reserve maritime tour experiences
- **User Authentication**: Secure account creation and login functionality
- **Booking Management**: View, modify, and cancel reservations
- **Payment Processing**: Secure transaction handling
- **Admin Dashboard**: Comprehensive management tools for operators

## Technologies Used

- Frontend: React.js, Redux, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT
- Payment Integration: Stripe
- Deployment: Docker, AWS

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/marina-fleet.git
cd marina-fleet
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start development server
```bash
npm run dev
```

## Project Structure

```
marina-fleet/
├── client/             # Frontend React application
├── server/             # Backend Node.js API
├── public/             # Static assets
├── docs/               # Documentation
└── docker/             # Docker configuration
```

## Screenshots

![Dashboard](https://via.placeholder.com/800x450?text=Marina+Fleet+Dashboard)
![Booking Flow](https://via.placeholder.com/800x450?text=Booking+Flow)
![Tour Selection](https://via.placeholder.com/800x450?text=Tour+Selection)

## Contributing

This project was created as a personal learning exercise, but contributions are welcome! Feel free to fork the repository and submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project was developed as a personal learning exercise
- Inspired by various maritime booking platforms
- Special thanks to the open-source community for their invaluable resources

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/marina-fleet](https://github.com/yourusername/marina-fleet)