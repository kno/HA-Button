import Styles from "./styles";

AppSettingsPage({
  // 1. Define state
  state: {
    config: {
      URL: "",
      token: "",
      runOnStart: false
    }
  },
  setState(props) {
    this.state.props = props;
  },
  setItem() {
    const newString = JSON.stringify(this.state.config);
    this.state.settingsStorage.setItem("config", newString);
  },
  saveToConfig(key, value) {
    this.state.config[key] = value;
    this.setItem();
  },
  build(props) {
    // 2. Get SettingsStorage
    this.getStorage(props);
    // 4. Return Render Function
    return View(
      {
        style: {
          padding: "12px 20px"
        }
      },
      [
        Section(
          {
            title: "Configuration"
          },
          [
            TextInput({
              label: "HA URL",
              bold: true,
              value: this.state.config.URL,
              placeholder: "Enter your Home Assistant URL",
              subStyle: Styles.inputStyle,
              maxLength: 200,
              onChange: (value) => {
                this.saveToConfig("URL", value);
              }
            }),
            TextInput({
              label: "Token",
              bold: true,
              value: this.state.config.token,
              placeholder: "Enter your Home Assistant Token",
              subStyle: Styles.inputStyle,
              maxLength: 200,
              onChange: (value) => {
                this.saveToConfig("token", value);
              }
            }),
            TextInput({
              label: "Button label",
              bold: true,
              value: this.state.config.label,
              placeholder: "Button label",
              subStyle: Styles.inputStyle,
              maxLength: 200,
              onChange: (value) => {
                this.saveToConfig("label", value);
              }
            }), Toggle({
              label: "Run on start",
              value: this.state.config.runOnStart,
              onChange: (value) => {
                this.saveToConfig("runOnStart", value);
              }
            })
          ]
        )
      ]
    );
  },
  getStorage(props) {
    this.state.settingsStorage = props.settingsStorage;
    try {
      this.state.config = JSON.parse(props.settings.config) || {
        URL: "",
        token: "",
        runOnStart: false
      };
    } catch {
      this.state.config = {URL: "", token: "", runOnStart: false};
    }
  }
});
