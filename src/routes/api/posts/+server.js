import { json } from "@sveltejs/kit"

async function getPosts() {
    let posts = []
    const paths= import.meta.glob('/src/posts/*.mdx', {eager: true})

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.mdx', '')
        if (file && typeof file == 'object' && 'metadata' in file) {
            const metadata = file.metadata
            // @ts-ignore
            const post = { ...metadata, slug }
            post.published && posts.push(post)
        }
    }

    posts.sort((first, second) => {
        return new Date(second.date).getTime() - new Date(first.date).getTime();
    });
    

    return posts
}

export async function GET() {
    const posts = await getPosts()
    return json (posts)
}