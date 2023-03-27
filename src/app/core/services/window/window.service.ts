import { Injectable } from '@angular/core';
import { fromEventPattern } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WindowService {
  scroll$ = fromEventPattern(
    (handler) => window.addEventListener('scroll', handler),
    (handler) => window.removeEventListener('scroll', handler)
  );

  resize$ = fromEventPattern(
    (handler) => window.addEventListener('resize', handler),
    (handler) => window.removeEventListener('resize', handler)
  );
}
