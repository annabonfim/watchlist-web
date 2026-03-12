import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItem } from '../list-item/list-item';

type WatchlistItem = {
  id?: number;
  title: string;
  whereToWatch: string;
  watched: boolean;
};

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ListItem],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  @Input() items: WatchlistItem[] = [];

  @Output() toggleWatched = new EventEmitter<{ id: number; watched: boolean }>();

  onToggleWatched(event: { id: number; watched: boolean }) {
    this.toggleWatched.emit(event);
  }
}
