import Publisher from "#models/publisher";
import { PublisherService } from "#services/publisher/PublisherService";
import { createPublisherValidator, editPublisherValidator } from "#validators/publisher";
import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";

@inject()
export default class PublisherController {
    constructor(protected publisher: PublisherService) { }
    async create({ request }: HttpContext) {
        const body = request.body();
        const payload = await createPublisherValidator.validate(body) as Publisher
        this.publisher.create(payload)
    }

    async update({ request }: HttpContext) {
        const id = request.all().id
        if (!id) {
            throw new Error("ID não encontrado")

        }
        const body = request.body();

        const payload = await editPublisherValidator.validate(body) as Publisher
        await this.publisher.update(id, payload)
    }

}