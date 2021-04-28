export interface BooksModel {
  id: string
  volumeInfo: {
    authors: string[];
    description: string;
    imageLinks: {
      smallThumbnail: string;
    };
    pageCount: number;
    publishedDate: string;
    publisher: string;
    title: string;

  }

}


