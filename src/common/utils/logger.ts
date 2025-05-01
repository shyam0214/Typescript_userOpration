
type LogLevel = 'info' | 'warn' | 'error';

const colors: Record<LogLevel, string> = {
  info: '\x1b[32m',   
  warn: '\x1b[33m',   
  error: '\x1b[31m', 
};

const resetColor = '\x1b[0m';

const formatMessage = (level: LogLevel, message: string) => {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
};

const logger = {
  info: (msg: string) => {
    const formatted = formatMessage('info', msg);
    console.log(colors.info + formatted + resetColor);
  },
  warn: (msg: string) => {
    const formatted = formatMessage('warn', msg);
    console.warn(colors.warn + formatted + resetColor);
  },
  error: (msg: string) => {
    const formatted = formatMessage('error', msg);
    console.error(colors.error + formatted + resetColor);
  },
};

export default logger;
