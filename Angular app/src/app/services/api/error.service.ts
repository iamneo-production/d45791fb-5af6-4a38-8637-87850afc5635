import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  _error: Error | null;
  errorUpdates: Subject<typeof this._error> = new Subject<typeof this._error>();

  constructor() {}

  set error(val: Error | null) {
    this._error = val;
    this.errorUpdates.next(this._error);
  }

  get error() {
    return this._error;
  }

  handleApiErrors(val: HttpErrorResponse) {
    console.log(val);
    this.error = val.error;
  }
}
