module.exports = config =>
  config.set({
    frameworks: ["browserify", "tap", "source-map-support"],
    reporters: ["tap-pretty"],
    browsers: ["Firefox"],
    files: ["test/**/*.js"],
    preprocessors: {
      "test/**/*.js": ["browserify"]
    },
    browserify: {
      debug: true,
      transform: ["babelify"]
    },
    tapReporter: {
      prettify: require("faucet"),
      separator: "----------------------------------------"
    },
    logLevel: config.LOG_ERROR,
    browserConsoleLogOptions: {
      level: "error",
      format: "%b %T: %m",
      terminal: false
    }
  })
