import sanityclient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient((
    projected: 'ssiv2ycu',
    dataset: 'production',
    apiVersion: '2022-08-21',
    useCdn: true,
    token: Process.env.
        NEXT_PUBLIC_SANITY_TOKEN
));

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);