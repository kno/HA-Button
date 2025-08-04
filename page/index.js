import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { BasePage } from "@zeppos/zml/base-page";
import {
  FETCH_BUTTON,
  FETCH_RESULT_TEXT,
  BG_IMAGE,
} from "zosLoader:./index.[pf].layout.js";

const logger = Logger.getLogger("HA Button");

let textWidget;
Page(
  BasePage({
    state: {
      button: null,
    },
    build() {
      hmUI.createWidget(hmUI.widget.IMG, BG_IMAGE);
      this.state.button = hmUI.createWidget(hmUI.widget.BUTTON, {
        ...FETCH_BUTTON(this.state.buttonLabel),
        click_func: (button_widget) => {
          this.state.button = button_widget;
          this.fetchData();
        }
      });
    },
    fetchData() {
      this.request({
        method: "GET_DATA"
      })
        .then((data) => {
          logger.log("receive data");
          const { result = {} } = data;
          const text = JSON.stringify(result);

          if (!textWidget) {
            textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
              ...FETCH_RESULT_TEXT,
              text
            });
          } else {
            textWidget.setProperty(hmUI.prop.TEXT, text);
          }
        })
        .catch((res) => {});
    },
    onInit() {
      console.log("onInit called");
      this.request({
        method: "GET_DATA",
        params: {
          initial: true,
        }
      });
      this.getConfig();
    },
    getConfig() {
      this.request({
        method: "GET_CONFIG"
      }).then(({ result }) => {
        this.state.button.setProperty(hmUI.prop.TEXT, result.label);
      });
    }
  })
);
