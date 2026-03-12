import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

type WatchlistItem = {
  id?: number;
  title: string;
  whereToWatch: string;
  watched: boolean;
};

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item.html',
  styleUrl: './list-item.css',
})
export class ListItem {
  @Input() item!: WatchlistItem;

  @Output() toggleWatched = new EventEmitter<{ id: number; watched: boolean }>();

onToggleWatched() {
  if (this.item.id != null) {
    this.toggleWatched.emit({
      id: this.item.id,
      watched: !this.item.watched
    });
  }
}
}
