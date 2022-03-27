import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Character } from './dto/character';
import { accessToken } from './constats';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { map } from 'rxjs/internal/operators/map';


@Injectable()
export class CharactersService {
    constructor(private httpService: HttpService) { }

    public getCharacters(): Promise<Character[]> {
        return lastValueFrom(
            this.httpService.get<Character[]>('https://the-one-api.dev/v2/character', {
                headers: ({
                    Authorization: 'Bearer ' + accessToken
                })
            }).pipe(
                map((res) => {
                    return res.data['docs'];
                }),
            ),
        );
    }    
}
