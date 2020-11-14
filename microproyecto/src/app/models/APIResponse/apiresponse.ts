import { Character } from '../character/character';

export interface APIResponse {
    info:{
        count:number
        pages:number
        next:string
        prev:string
    },
    results:Array<Character>
}
