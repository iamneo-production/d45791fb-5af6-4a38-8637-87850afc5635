import { throwError } from 'rxjs';

export abstract class AppRESTService {
  abstract API_URL: string;
  handleError(error: any) {
    console.error(error); // log to console instead
    return throwError(() => error);
  }
}
