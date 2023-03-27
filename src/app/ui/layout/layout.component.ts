import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getRandom().subscribe();
  }

  getRandom(page = 1): Observable<unknown> {
    return this.httpClient.get(`${environment.baseUrl}/search`, {
      params: { per_page: 15, page, query: 'dog' },
    });
  }
}
