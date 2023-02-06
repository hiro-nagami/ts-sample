import { faker } from '@faker-js/faker';
import { createContext, useCallback } from 'react';
import { Article } from '../../../models/Article';
import { range } from '../../../utils';

export class CreateArticleQuery {
    title: string
    content: string

    constructor(params: Required<CreateArticleQuery>) {
        this.title = params.title
        this.content = params.content
    }
}

type CreateArticlesResult = {
    readonly article: Article
}

export class LoadArticleQuery {
    title: string | null
    content: string | null
    page: number
    limit: number

    constructor(params: Partial<LoadArticleQuery>) {
        this.title = params.title ?? null
        this.content = params.content ?? null
        this.page = params.page && params.page > 0 ? params.page : 0
        this.limit = params.limit ?? 10
    }
}

type LoadArticlesResult = {
    readonly articles: Article[]
    readonly pageCount: number
}

interface ContextInterface {
    readonly createArticle: (props: CreateArticleQuery) => Promise<CreateArticlesResult>
    readonly loadArticles: (query?: LoadArticleQuery) => Promise<LoadArticlesResult>
}

export const ArticleContext = createContext<ContextInterface>({ 
    createArticle: async (_) => { throw new Error('Function not implemented.') },
    loadArticles: async () => { throw new Error('Function not implemented.') },
})

type TProviderProps = {
    readonly children: React.ReactNode
}

let articles = range(0, 100).map((_,i) => {
    return new Article({
        title: `${i + 1} - ${faker.lorem.sentence()}`,
        content: faker.lorem.sentence(),
        imageUrl: faker.image.abstract(640, 480, true),
    })
})

export const ArticleProvider = (props: TProviderProps) => {
    const createArticle = useCallback(async (props: CreateArticleQuery): Promise<CreateArticlesResult> => {
        const article = new Article({ ...props, imageUrl: faker.image.abstract(640, 480, true) })
        articles.push(article)
        return { article }
    }, [])

    const loadArticles = useCallback(async (query?: LoadArticleQuery): Promise<LoadArticlesResult> => {
        const q = new LoadArticleQuery(query ?? new LoadArticleQuery({}))
        const start = q.page * q.limit
        const end   = start + q.limit   
        return { articles: articles.slice(start, end), pageCount: articles.length }
    }, [])

    return (
        <ArticleContext.Provider value={ { createArticle, loadArticles } }>
            { props.children }
        </ArticleContext.Provider>
    )
}
