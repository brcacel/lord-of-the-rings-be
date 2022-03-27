import { Controller, Get, SerializeOptions } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { Character } from './dto/character';

@Controller('characters')
export class CharactersController {
    constructor(private readonly charactersService: CharactersService) {}

  @Get()
  public async getCharacters():Promise<Character[]> {
    return await this.charactersService.getCharacters();
  }
}
