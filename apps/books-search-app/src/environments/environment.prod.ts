import { LangOptions, LoggerConfigModel, LogOptions, MessageFormats } from '../../../../libs/services';

export const environment = {
  production: true,
  loggerConfig: {
    logTo: [LogOptions.CONSOLE],
    language: LangOptions.ENGLISH,
    messageFormat: MessageFormats.SHORT,
    flushTime: 5000

  } as LoggerConfigModel
};
