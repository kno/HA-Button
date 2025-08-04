# HA Button - Home Assistant Button for Zepp OS

An app for Zepp OS watches that allows you to interact with Home Assistant to activate input buttons directly from your smartwatch.

## 🚀 Features

- **Remote control**: Activate Home Assistant buttons from your Zepp OS watch
- **Custom configuration**: Configure your Home Assistant URL, access token, and entity
- **Customizable button**: Define the text that appears on the button
- **Automatic execution**: Option to execute the action when the app is launched
- **Compatibility**: Supports Zepp OS watches with round (480px) and square (390px) screens

## 📋 Requirements

- Watch compatible with Zepp OS API 4.0+
- Accessible Home Assistant instance
- Long-term Home Assistant access token
- `input_button` entity configured in Home Assistant

## 🛠️ Installation

1. Clone this repository:
```bash
git clone https://github.com/kno/HA-Button.git
cd HA-Button
```

2. Install dependencies:
```bash
npm install
```
3. Build the application using Zepp OS development tools

## ⚙️ Configuration

### Home Assistant

1. Create a long-term access token in Home Assistant:
   - Go to your profile in Home Assistant
   - Scroll down to "Long-term access tokens"
   - Create a new token and save it

2. Configure an `input_button` in your `configuration.yaml`:
```yaml
input_button:
  open_gate:
    name: "Open Gate"
    icon: mdi:gate
```

### Zepp OS app

1. Install the app on your Zepp OS watch
2. Go to the app settings
3. Fill in the following fields:
   - **HA URL**: The URL of your Home Assistant instance (e.g., `https://mi-casa.duckdns.org`)
   - **Token**: The long-term access token you created
   - **Button label**: The text that will appear on the button (e.g., "Open Gate")
   - **Entity**: The ID of the button entity (e.g., `input_button.open_gate`)
   - **Run on start**: Enable if you want the action to run when the app is opened

## 🎯 Usage

1. Open the "HA Button" app on your watch
2. Tap the button to activate the entity configured in Home Assistant
3. The app will display Home Assistant's response on the screen

## 🏗️ Project Structure
```
├── app.js                # Main entry point of the application
├── app.json              # Application configuration
├── package.json          # Project dependencies and metadata
├── app-side/             # Application side logic
│   └── index.js          # Service that handles HTTP requests
├── page/                 # Main user interface
│   ├── index.js          # Logic for the main page
│   └── index.[pf].layout.js # Layouts for different screen sizes
├── setting/              # Application configuration
│   ├── index.js          # Configuration page
│   └── styles.js         # Styles for the configuration
├── assets/               # Static resources (icons, images)
└── utils/                # Utilities and configuration
```
## 🔧 Development

### Development requirements

- Node.js >= 22.0.0
- npm >= 10.9.2
- Zepp OS SDK

### Main dependencies

- `@zeppos/zml`: Interface framework for Zepp OS
- `@zeppos/device-types`: Compatible device types

## 🤝 Contribute

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

Este proyecto está bajo la licencia ISC. Ve el archivo `LICENSE` para más detalles.

## ⚠️ Important notes

- Make sure your Home Assistant is accessible from the internet or from your watch's local network.
- The access token must have permissions to control the specified `input_button` entity.
- The app is specifically designed for Home Assistant `input_button` entities.

## 🆘 Troubleshooting

### "ERROR" error in the response
- Verify that the Home Assistant URL is correct and accessible
- Check that the access token is valid
- Make sure that the specified entity exists in Home Assistant

### The button does not appear or does not work
- Check the settings in the app
- Verify that all fields are filled in correctly
- Check the Home Assistant logs to see if the requests are coming through

---

Developed by kNo - For more information on developing for Zepp OS, visit the [official documentation](https://docs.zepp.com/).
(Translated from Spanish using DeepL)