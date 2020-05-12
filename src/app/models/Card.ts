import {Url} from 'url';

export class Card {
  original: string;
  translation: string;
  type?: string;
  antonym?: string;
  example?: string;
  frequency?: string;
  image?: Url;
}
