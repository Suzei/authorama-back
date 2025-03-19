import Author from "#models/author";

export class AuthorService {
	create(author: Author) {
		Author.create(author)
	}

	async all(q?: Record<string, any>) {

		if (q) {
			const query = Author.query()
			for (const [key, value] of Object.entries(q)) {
				query.where(key, 'like', `%${value}%`)
			}

			return await query.limit(10).exec()

		}


		const authors = await Author.all()
		return authors;
	}
}