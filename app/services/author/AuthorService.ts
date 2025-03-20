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


	async index(id: string) {
		const author = await Author.find(id)

		if (!author) {
			throw new Error('Autor não encontrado')
		}
		return author
	}

	async update(id: any, author: {}) {

		const authorRow = await Author.findBy('id', id)
		if (!authorRow) {
			throw new Error('Autor não encontrado')
		}
		authorRow.merge(author);
		await authorRow.save()
	}

	async delete(id: string) {
		const author = await Author.findBy('id', id)

		if (!author) {
			throw new Error('Autor não encontrado')
		}

		author.delete()
	}

}