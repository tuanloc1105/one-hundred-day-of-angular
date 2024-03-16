import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author, emptyAuthor } from '../model/authors.model';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss'],
})
export class AuthorDetailComponent {
  // This doesn't actually initialize an empty Article; it just creates an empty object with the Article type, defeating the purpose of Typescript and interfaces. It might look like an Article, but it won't have any of its fields, leading to undefined errors if you access any field. The number of upvotes on this is puzzling
  // @Input() author: Author = {} as any as Author;

  @Input() author: Author = emptyAuthor();
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
}
