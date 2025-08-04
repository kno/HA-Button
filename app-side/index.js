import { BaseSideService } from "@zeppos/zml/base-side";
import {settingsLib} from '@zeppos/zml/base-side'


async function fetchData(res) {
  try {
    const config = getConfig();
    const response = await fetch({
      url: `${config.URL}/api/services/input_button/press`,
      method: "POST",
      headers: {
        'Authorization': `Bearer ${config.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        entity_id: 'input_button.verja'
      })
    });
    const resBody =
      typeof response.body === "string"
        ? JSON.parse(response.body)
        : response.body;

    res(null, {
      result: resBody
    });
  } catch (error) {
    res(null, {
      result: "ERROR"
    });
  }
}

const DEFAULT_CONFIG = {
  URL: '',
  Token: ''
}

function getConfig() {
  return settingsLib.getItem('config')
    ? JSON.parse(settingsLib.getItem('config'))
    : [...DEFAULT_CONFIG]
}

AppSideService(
  BaseSideService({
    onInit() {
      const config = settings.settingsStorage.getItem("config");
    },

    onRequest(req, res) {
      console.log("=====>,", req.method);
      if (req.method === "GET_DATA") {
        fetchData(res);
      }
      if (req.method === "GET_CONFIG") {
        res(null, {
          result: getConfig()
        })
      }
    },

    onRun() {
      console.log("Service is running");
    },

    onDestroy() {}
  })
);
