import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { registerMicroApps, start } from "qiankun";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

registerMicroApps(
  [
    {
      name: "microReactApp",
      entry: "http://192.168.1.151:8088/microReactApp/",
      container: "#subapp-viewport",
      activeRule: "#/microReactApp",
    },
    {
      name: "microVueApp",
      entry: "http://192.168.1.151:8088/microVueApp/",
      container: "#subapp-viewport",
      activeRule: "#/microVueApp",
    },
  ],
  {
    beforeLoad: [
      (app) => {
        console.log("[LifeCycle] before load %c%s", "color: green;", app.name);
        return Promise.resolve();
      },
    ],
    beforeMount: [
      (app) => {
        console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
        return Promise.resolve();
      },
    ],
    afterUnmount: [
      (app) => {
        console.log(
          "[LifeCycle] after unmount %c%s",
          "color: green;",
          app.name
        );
        return Promise.resolve();
      },
    ],
  }
);
start();
