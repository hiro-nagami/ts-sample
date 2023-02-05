export class Article {
    title: string
    content: string
    imageUrl: string | null

    constructor(params: Required<Article>) {
        this.title = params.title
        this.content = params.content
        this.imageUrl = params.imageUrl
    }
}