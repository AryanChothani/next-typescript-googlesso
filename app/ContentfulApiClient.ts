import { createClient } from 'contentful'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
})

export class ContentfulClient {
    contentType = "";

    constructor(type: string) {
        this.contentType = type;
    }

    async getItems() {
        try {
            const { items } = await client.getEntries({ content_type: this.contentType });
            console.log("items", items)
            return items;
        } catch (error) {
            console.log(error);
        }
    }

    async getAsset(id: string) {
        const { fields } = await client.getAsset(id);

        return fields;
    }
}