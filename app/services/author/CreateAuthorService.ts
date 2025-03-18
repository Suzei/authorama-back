import Author from "#models/author";

export class CreateAuthorService {
    create(author: Author) {
        Author.create(author)
    }
}