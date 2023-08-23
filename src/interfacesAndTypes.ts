import { ReactNode } from "react";


//components
export type Children = { children: ReactNode };
export type TSectionTitle = { title: string };
export type TLight = {light?: boolean};



export interface ILinkWithIcon {
    linkText: string,
    navigation: string,
};


export interface ICardData {
    author: string,
    authors: string,
    clean_url: string,
    country: string,
    excerpt: string,
    is_opinion: boolean,
    language: string,
    link: string,
    media: string,
    published_date: string,
    published_date_precision: string,
    rank: number,
    rights: string,
    summary: string,
    title: string,
    topic: string,
    twitter_account: string,
    _id: string,
    _score: null
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