export interface Article {
    id: number
    code: string
    title: string
    release_date: string
    description: string | null
    thumbnail_url: string | null
    article_url: string | null
    magnet_link: string | null
    ProducerId: number | null
}

export interface ArticlesResponse {
    page: number
    limit: number
    results: Article[]
    total_pages: number
    total_results: number
}

export interface Producer {
    id: number
    name: string
    thumbnail_url: string | null
}

export interface Actress {
    id: number
    name: string
    birthdate: string | null
    thumbnail_url: string | null
}

export interface Tag {
    id: number
    name: string
}

export interface ArticleDetails extends Article {
    Producer?: Producer
    Actresses?: Actress[]
    Tags?: Tag[]
}