import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CharactersController } from './characters/characters.controller';
import { CharactersService } from './characters/characters.service';

@Module({
  imports: [HttpModule],
  controllers: [CharactersController],
  providers: [CharactersService],
})
export class AppModule {}
