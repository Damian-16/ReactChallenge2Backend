import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  search(@Query('title') searchTerm: string): any {
    // Filtra los objetos de búsqueda basados en el título utilizando el servicio
    const results = this.searchService.searchObjectsByTitle(searchTerm);

    // Retorna los resultados
    return results;
  }
}
