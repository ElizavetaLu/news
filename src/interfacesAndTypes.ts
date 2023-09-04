import { ReactNode } from "react";


//components
export type Children = { children: ReactNode };
export type TSectionTitle = { title: string };
export type TLight = { light?: boolean };



export interface ILinkWithIcon {
    linkText: string,
    navigation: string,
};

export interface ISearchInterface {
    placeholder: string,
    light?: boolean,
    action?: () => void
}

export interface ICardData {
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: {
        id: null | any,
        name: string
    },
    title: string,
    urlToImage: string
}

export interface INewsCard {
    large?: boolean,
    horizontal?: boolean,
    vertical?: boolean,
    cardData: ICardData,
}

export interface INewsSection {
    title: string,
    data: ICardData[],
}


// API payload 
export interface IGetLatestHeadlines {
    lang?: string,
    pageSize: number,
    page: number
}

export interface INewsRequestPayload {
    category?: string,
    pageSize: number,
    page: number,
    searchTerm?: string,
}