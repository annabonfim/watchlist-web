import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { Form } from './form/form';
import { List } from './list/list';
import { ApiService } from './service/api.service';

type WatchlistItem = {
  id?: number;
  title: string;
  whereToWatch: string;
  watched: boolean;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Form, List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('watchlist-web');

  private apiService = inject(ApiService);
  private cdr = inject(ChangeDetectorRef);

  watchlists: WatchlistItem[] = [];

  ngOnInit(): void {
    this.loadWatchlists();
  }

  loadWatchlists() {
    this.apiService.getWatchlists().subscribe({
      next: (data) => {
        this.watchlists = [...data];
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('erro ao carregar lista', error);
      }
    });
  }

  addWatchlist(item: WatchlistItem) {
    this.apiService.addWatchlist(item).subscribe({
      next: () => {
        this.loadWatchlists();
      },
      error: (error) => {
        console.error('erro ao criar item', error);
      }
    });
  }

  toggleWatched(id: number, watched: boolean) {
    this.apiService.updateWatchedStatus(id, watched).subscribe({
      next: () => {
        this.loadWatchlists();
      },
      error: (error) => {
        console.error('erro ao atualizar status do item', error);
      }
    });
  }
}
