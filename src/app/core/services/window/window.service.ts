import { Injectable } from '@angular/core';
import { fromEventPattern, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WindowService {
  scroll$: Observable<Event> = fromEventPattern(
    (handler) => window.addEventListener('scroll', handler),
    (handler) => window.removeEventListener('scroll', handler)
  );

  resize$: Observable<Event> = fromEventPattern(
    (handler) => window.addEventListener('resize', handler),
    (handler) => window.removeEventListener('resize', handler)
  );
}
