import vine from '@vinejs/vine'

export const createPublisherValidator = vine.compile(
    vine.object({
        name: vine.string().trim().minLength(6),
        cnpj: vine.string().trim().minLength(14),
    })
)

export const editPublisherValidator = vine.compile(
    vine.object({
        name: vine.string().trim().minLength(6).optional(),
        cnpj: vine.string().trim().minLength(14).optional(),
    }).optional()
)