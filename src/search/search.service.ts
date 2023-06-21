import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
  searchObjectsByTitle(searchTerm: string): any {
   
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

    
    const filteredResults = searchResults.filter((result) =>
      result.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    
    return filteredResults;
  }
}
