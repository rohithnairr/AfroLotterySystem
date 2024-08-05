import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    apiVersion: '2024-08-04',
    dataset: 'production',
    projectId: 'tjg5dcj2',
    useCdn: true,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}
