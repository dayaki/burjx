# Burjx Crypto Market App

## About

This project is a take-home assignment for a software engineering role at **BurjX**. It is a cryptocurrency market overview app built with Expo (React Native), with a focus on modern design, performance, and user experience.

The app allows users to:

- Authenticate using biometrics (Face ID / Touch ID)
- View live market data, top gainers/losers, and detailed coin info
- Explore interactive charts and infinite scrolling lists

**Note:**

- This project uses **Expo** instead of React Native CLI to make setup and running the app as quick and simple as possible.
- Some biometric features (like full Face ID) may not work in the Expo Go app. For full biometric support, you may need to build the app on a real device (see below).

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v21 or higher recommended)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) or [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### 1. Clone the Repository

```bash
git clone https://github.com/dayaki/burjx
cd burjx
```

### 2. Install Dependencies

```bash
yarn install
# or
npm install
```

### 3. Run the App with Expo

```bash
npx expo start
```

- Scan the QR code with the **Expo Go** app on your iOS or Android device.
- Or run on an emulator/simulator (see Expo docs).

### 4. Biometric Authentication Notes

- **Expo Go Limitation:** Some biometric features (especially Face ID) may not be fully supported in Expo Go. You may see fallback prompts or limited functionality.
- **For Full Biometric Support:**
  1. Build the app for your device:
     - iOS: `expo build:ios` or `eas build -p ios`
     - Android: `expo build:android` or `eas build -p android`
  2. Install the built app on your device.
  3. Test biometric authentication (Face ID / Touch ID) in the standalone build.

See [Expo Local Authentication docs](https://docs.expo.dev/versions/latest/sdk/local-authentication/) for more info.

---

## API Resources

- All Coins: `https://coingeko.burjx.com/coin-prices-all?currency=usd&page=1&pageSize=10`
- Coin OHLC: `https://coingeko.burjx.com/coin-ohlc?productId=2&days=30`

---

## Project Structure

- `src/screens/` — App screens (Login, Markets, CoinDetails, etc.)
- `src/common/` — Shared components and styles
- `src/types.ts` — TypeScript types
- `src/utils/` — Utilities, chart helpers, etc.
