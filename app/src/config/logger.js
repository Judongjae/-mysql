const { createLogger, transports, format } = require("winston");
const { combine, timestamp, label, printf, json, simple, colorize } = format;

const printFormat = printf(({ timestamp, level, label, message }) => {
  return `${timestamp} [${label}] ${level} : ${message}`;
});

const printLogFormat = combine(
  label({
    label: "winston 로그시스템 구현",
  }),
  colorize(),
  timestamp({
    format: "YYYY-MM-DD HH:mm:dd",
  }),
  printFormat
);

const logger = createLogger({
  transports: [
    new transports.File({
      level: "info",
      format: printLogFormat,
    }),
  ],
});

module.exports = logger;
