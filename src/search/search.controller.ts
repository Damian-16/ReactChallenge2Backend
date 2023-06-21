import { Controller, Get, Query } from '@nestjs/common';

@Controller('search')
export class SearchController {
  @Get()
  search(@Query('term') searchTerm: string): any {
    // Filtra los objetos de búsqueda basados en el título
    const results = searchObjectsByTitle(searchTerm);

    // Retorna los resultados
    return results;
  }
}
