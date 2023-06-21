import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
  searchObjectsByTitle(searchTerm: string): any {
    // Aquí implementas la lógica de búsqueda basada en el título
    // Puedes realizar consultas a una base de datos, buscar en un arreglo de objetos, etc.
    // Retorna los resultados filtrados
    const searchResults = [
      {
        id: 1,
        title: 'Resultado 1',
        description: 'Descripción del resultado 1',
      },
      {
        id: 2,
        title: 'Resultado 2',
        description: 'Descripción del resultado 2',
      },
      {
        id: 3,
        title: 'Resultado 3',
        description: 'Descripción del resultado 3',
      },
    ];

    // Filtrar los objetos de búsqueda basados en el título
    const filteredResults = searchResults.filter((result) =>
      result.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    // Retornar los resultados filtrados
    return filteredResults;
  }
}
