function init() {
  // Sentry.init({
  //   dsn: "https://edee3e9f6eb544e2bd666c13270c7641@sentry.io/1782619"
  // });
}

function log(error) {
  console.error(error);
  // Sentry.captureException(error);
}

export default {
  init,
  log
};
