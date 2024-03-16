import { Component } from '@angular/core';
import { Author, emptyAuthor, fakeUsers } from '../model/authors.model';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss'],
})
export class AuthorListComponent {
  authors: Author[] = fakeUsers;
  currentAuthor: Author = this.authors[0];

  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }

  onDeleted(deletedAuthor: number) {
    // this.authors = this.authors.filter((author) => {
    //   return author.id !== deletedAuthor
    // });
    this.authors = this.authors.filter((author) => author.id !== deletedAuthor);

    if (this.currentAuthor.id === deletedAuthor) {
      if (this.authors) {
        this.currentAuthor = this.authors[0];
      } else {
        this.currentAuthor = emptyAuthor();
      }
    }
  }
}
