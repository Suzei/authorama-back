import Publisher from "#models/publisher";

export class PublisherService {
	create(publisher: Publisher) {
		Publisher.create(publisher)
	}

	async update(id: string, publisher: {}) {

		const publisherRow = await Publisher.findBy('id', id)
		if (!publisherRow) {
			throw new Error('Editora não encontrada')
		}
		publisherRow.merge(publisher);
		await publisherRow.save()
	}
}

