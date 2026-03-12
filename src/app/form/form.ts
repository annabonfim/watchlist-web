import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

type WatchlistItem = {
  title: string;
  whereToWatch: string;
  watched: boolean;
};

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  title = '';
  whereToWatch = '';

  @Output() addItem = new EventEmitter<WatchlistItem>();

  onSubmit() {
    if (!this.title.trim() || !this.whereToWatch.trim()) {
      return;
    }

    const newItem: WatchlistItem = {
      title: this.title,
      whereToWatch: this.whereToWatch,
      watched: false
    };

    this.addItem.emit(newItem);

    this.title = '';
    this.whereToWatch = '';
  }
}
