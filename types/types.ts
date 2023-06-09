export type ContactType = 'email' | 'telephone';

export enum ContactEnum {
  email = 'email',
  telephone = 'telephone',
}

export interface SolutionType {
  id: number;
  title: string;
  bgColor?: string;
}

export interface CardSolutionType {
  id: number;
  solution: SolutionType;
  user?: AuthorDataType;
  avatar?: string;
  author?: string;
  jobPosition?: string;
  body: string;
  title: string;
}

export interface EmployeeType {
  id: number;

  title: string;
  jobPosition: string;
}

export interface CompanyServiceType {
  id: number;
  title: string;
}

export interface ReviewType {
  id: number;
  title: string;
  person: string;
  link: string;
  image: string;
}

export type CartTeamType = {
  id: number;
  data: {
    type: 'picture' | 'text';
    picture?: string;

    title?: string;
    content?: string;
  };
  user?: {
    name: string;
    avatar?: string;
    title: string;
    jobPosition?: string;
    office: string[];
  };
};

export type AuthorDataType = {
  id: number;
  author: string;
  avatar: string;
  jobPosition: string;
};

interface NewsArticleDataType {
  id: number;
  meta: NewsArticleMetaDataType;
  content: NewsArticleContentDataType[];
}

interface NewsArticleMetaDataType {
  title: string;
  date: string;
  image: string;
  banner: string;
  category: string;
  description: string;
  link: string;
}

interface NewsArticleContentDataType {
  id: number;
  style: string;
  data: string[];
}

export interface NewsDataType extends NewsArticleDataType {}

export interface NewsMetaDataType extends NewsArticleMetaDataType {}

export interface NewsContentDataType extends NewsArticleContentDataType {}

export interface ArticleDataType extends NewsArticleDataType {}

export interface ArticleMetaDataType extends NewsArticleMetaDataType {}

export interface ArticleContentDataType extends NewsArticleContentDataType {}
