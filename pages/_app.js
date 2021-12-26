import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 6,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

// when you change Route, it dispatches an action. Tapping into it here
// Progress bar will start loading at the point the route started to change
Router.events.on("routeChangeStart", progress.start);
// Finish point
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
