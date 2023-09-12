import { ReactNode } from "react";


//components
export type Children = { children: ReactNode };
export type TSectionTitle = { title: string };
export type TLight = { light?: boolean };



export interface ILinkWithIcon {
    linkText: string,
    navigation: string,
};

export interface INavigationLink {
    path: string,
    name: string,
    options: string[],
    action: () => void
};

export interface ISearchInterface {
    value: string,
    setValue: (val: string) => void,
    placeholder: string,
    light?: boolean,
    action?: () => void
}

export interface ICardData {
    article_id: string,
    category: string[],
    content: string,
    country: string[],
    creator: string[] | null,
    description: string,
    image_url: string,
    keywords: string[] | null,
    language: string,
    link: string,
    pubDate: string,
    source_id: string,
    source_priority: number,
    title: string,
    video_url: string | null,
}

export interface INewsCard {
    lastNewsElementRef?: any,
    large?: boolean,
    horizontal?: boolean,
    vertical?: boolean,
    cardData: ICardData,
}

export interface INewsSection {
    title: string,
    data: ICardData[],
}

export interface IFetchingProgress {
    isFetching: boolean,
    isErrorOccured: boolean,
    totalPages: number,
    searchTerm?: string
}


// API payload  
export interface INewsRequestPayload {
    category?: string,
    page?: number | null,
    size?: number,
    searchTerm?: string,
}

//hooks
export interface Args extends IntersectionObserverInit {
    freezeOnceVisible?: boolean
}