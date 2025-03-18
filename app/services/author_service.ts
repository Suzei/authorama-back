import Author from "#models/author";

export class AuthorService {

	async create(author: Author) {

		try {
			const existingAuthor = await Author.query()
				.whereRaw('LOWER(name) = ?', [author.name.toLowerCase()])
				.first()

			if (existingAuthor) {
				throw new Error('Autor já cadastrado.')
			}

			await Author.create(author)
		} catch (error) {
			console.error('Erro ao criar autor:', error);
			throw error;
		}
	}

	list() {
		return Author.all()
	}
}
