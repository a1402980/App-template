# Mobile App Template

A React Native mobile app template built with Expo and TypeScript. This template provides a foundation for building cross-platform mobile applications that can display both API-based content and web content from your websites.

## Features

- Cross-platform (iOS & Android) support
- TypeScript for type safety
- Modern navigation with React Navigation
- WebView integration for displaying website content
- Profile management
- Settings management
- News feed
- Product catalog
- Contact page integration

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Studio (for Android development)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── navigation/     # Navigation configuration
  ├── screens/        # Screen components
  ├── services/       # API and other services
  ├── types/          # TypeScript type definitions
  ├── hooks/          # Custom React hooks
  └── utils/          # Utility functions
```

## Configuration

1. Update the API endpoints in the services directory
2. Configure your website URLs in the Contact screen
3. Customize the theme and styling in the respective screen components

## Development

- For iOS: Press 'i' in the terminal or run `npm run ios`
- For Android: Press 'a' in the terminal or run `npm run android`

## Building for Production

1. Configure your app.json with your app details
2. Build for iOS:
```bash
expo build:ios
```

3. Build for Android:
```bash
expo build:android
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 