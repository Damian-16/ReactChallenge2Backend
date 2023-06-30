import {
  Controller,
  Get,
  NotFoundException,
  Query,
  Param,
} from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  search(@Query('title') searchTerm: string): any {
    const results = this.searchService.searchObjectsByTitle(searchTerm);
    if (results.length === 0) {
      throw new NotFoundException('No se encontraron resultados de búsqueda.');
    }

    return results;
  }
  @Get('details/:id')
  getCharacter(@Param('id') id: string): any {
    return this.searchService.getObjectById(id);
  }
}
