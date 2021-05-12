import { AfterViewInit, Injectable} from '@angular/core';

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { bufferTime, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class LoggerService implements AfterViewInit{
  loggerConfig: LoggerConfigModel = {
    flushTime: 5000, language: LangOptions.ENGLISH, logTo: [LogOptions.CONSOLE], messageFormat: MessageFormats.DEV
  };

  logsQueue$= new Subject<LogModel>();
  logs$: Observable<LogModel> = this.logsQueue$.asObservable();


  constructor(private router: Router) {
    this.logs$.pipe(bufferTime(this.loggerConfig.flushTime), distinctUntilChanged())
      .subscribe((queueArray: LogModel[]) => {
        queueArray.forEach((item: LogModel) => {
          if (item.logTo === LogOptions.CONSOLE) {
            console.log(item.err)
          }
          if (item.logTo === LogOptions.LOCAL_STORAGE) {
            localStorage.setItem('errors', item.err)
          }
        })
      });
  }

  handleResponses(evt: HttpResponse<object>){
    if (evt?.status && evt.status !== 200 && evt.status !== 201) {
      this.logError(evt)
    }
  }

  logError(evt: HttpResponse<object>) {
    if (this.loggerConfig.logTo.includes(LogOptions.CONSOLE)) {
      this.throwErrorToConsole(evt)
    }
    if (this.loggerConfig.logTo.includes(LogOptions.LOCAL_STORAGE)) {
      this.throwErrorToLocalStorage(evt)
    }
  }



  throwErrorToConsole(evt: HttpResponse<object>) {
    let consoleError = '';
    consoleError += this.getErrorLanguage();
    consoleError += this.getErrorDetails(evt)
    this.logsQueue$.next({ err: consoleError, logTo: LogOptions.CONSOLE })
  }


  throwErrorToLocalStorage(evt: HttpResponse<object>) {
    let consoleError = '';
    consoleError += this.getErrorLanguage();
    consoleError += this.getErrorDetails(evt)
    let currentErrs = localStorage.getItem('errors');
    currentErrs+= `[${consoleError}]`
    this.logsQueue$.next({ err: currentErrs, logTo: LogOptions.LOCAL_STORAGE })
  }

  getErrorDetails(evt: HttpResponse<object>): string {
    let msg: string;
    switch (this.loggerConfig.messageFormat) {
      case MessageFormats.DETAILED:
        msg = `status: ${evt.status}, Message: ${evt.body}, ${evt.statusText}, date: ${new Date()}`
        return JSON.stringify(msg)
      case MessageFormats.DEV:
        return JSON.stringify(evt)
      case MessageFormats.SHORT:
        msg = `Message: ${evt.body}`
        return JSON.stringify(msg)
    }
  }


  getErrorLanguage() {
    switch (this.loggerConfig.language) {
      case LangOptions.ENGLISH:
        return 'Response error';
      case LangOptions.HEBREW:
        return 'שגיאת תגובה';
      case LangOptions.SPANISH:
        return 'Error de respuesta'
    }
  }


  handleError(err: HttpErrorResponse) {
    console.log(err);
  }

  setLoggerConfig(config: LoggerConfigModel){
    this.loggerConfig = config;
  }

}


export interface LoggerConfigModel {
  logTo: LogOptions[];
  flushTime: number;
  messageFormat: MessageFormats;
  language: LangOptions
}

export enum LogOptions {
  CONSOLE,
  LOCAL_STORAGE
}

export enum LangOptions {
  ENGLISH,
  HEBREW,
  SPANISH
}

export enum MessageFormats {
  SHORT,
  DETAILED,
  DEV
}

export interface LogModel {
  err: string;
  logTo: LogOptions;
}
