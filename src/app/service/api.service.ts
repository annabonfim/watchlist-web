import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface WatchlistItem {
  id?: number;
  title: string;
  whereToWatch: string;
  watched: boolean;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/watchlists';

  getWatchlists(): Observable<WatchlistItem[]> {
    return this.http.get<WatchlistItem[]>(this.baseUrl);
  }

  addWatchlist(item: WatchlistItem): Observable<WatchlistItem> {
    return this.http.post<WatchlistItem>(this.baseUrl, item);
  }

  updateWatchedStatus(id: number, watched: boolean): Observable<WatchlistItem> {
    return this.http.patch<WatchlistItem>(`${this.baseUrl}/${id}`, { watched });
  }
}
