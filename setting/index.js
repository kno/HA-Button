import Styles from "./styles";

AppSettingsPage({
  // 1. Define state
  state: {
    testKey: null,
    config: {
      URL: "zzz",
      token: ""
    }
  },
  setState(props) {
    this.state.props = props;
    console.log("config: ", this.state.config);
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

    // 3. Logic
    const toggleButtonMap = {
      ["Hello Zepp OSS"]: "Hello Worlda",
      ["Hello Worlda"]: "Hello Zepp OSS"
    };

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
            })
          ]
        ),
        Button({
          label: this.state.testKey,
          style: {
            fontSize: "12px",
            borderRadius: "30px",
            background: "#D85E33",
            color: "white"
          },
          onClick: () => {
            // 5. Modify the data in settingsStorage in the callback function of the event
            // props.settingsStorage.setItem(
            //   "testKey",
            //   toggleButtonMap[this.state.testKey]
            // );
          }
        })
      ]
    );
  },
  getStorage(props) {
    this.state.settingsStorage = props.settingsStorage;
    this.state.testKey = props.settings.testKey || "Hello World";
    this.state.config = JSON.parse(props.settings.config) || {
      URL: "",
      Token: ""
    };
  }
});
