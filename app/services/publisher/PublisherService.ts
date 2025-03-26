import Publisher from "#models/publisher";

export class PublisherService {
    create(publisher: Publisher) {
        Publisher.create(publisher)
    }
}