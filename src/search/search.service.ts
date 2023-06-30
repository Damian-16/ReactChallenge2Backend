// import { Injectable, NotFoundException } from '@nestjs/common';

// const searchResults = [
//   {
//     id: 1,
//     title: 'Rick Sanchez',
//     description: 'Descripción del resultado 1',
//     img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//     species: 'Humano',
//     origin: 'Eart (C-137)',
//     gender:'Masculino'
//   },
//   {
//     id: 2,
//     title: 'Morty Smith',
//     description: 'Descripción del resultado 2',
//     img: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//     species: 'Humano',
//     origin: 'Earth (?)',
//     gender:'Masculino'
//   },
//   {
//     id: 3,
//     title: 'Summer Smith',
//     description: 'Descripción del resultado 3',
//     img: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
//     species: 'Humana',
//     origin: 'Earth (Replacement Dimension)',
//     gender:'Femenina'
//   },
//   {
//     id: 4,
//     title: 'Beth Smith',
//     description: 'Descripción del resultado 4',
//     img: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
//     species: 'Humana',
//     origin: 'Earth (Replacement Dimension)',
//     gender:'Femenina'
//   },
//   {
//     id: 5,
//     title: 'Jerry Smith',
//     description: 'Descripción del resultado 5',
//     img: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
//     species: 'Humana',
//     origin: 'Earth (Replacement Dimension)',
//     gender:'Masculino'
//   },
//   {
//     id: 6,
//     title: 'Abadango Cluster Princess',
//     description: 'Descripción del resultado 6',
//     img: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
//     species: 'Alien',
//     origin: 'Abadango',
//     gender:'Femenina'
//   },
// ];
// @Injectable()
// export class SearchService {
//   searchObjectsByTitle(searchTerm: string): any {
//     const filteredResults = searchResults.filter((result) => {
//       return result.title.toLowerCase().includes(searchTerm.toLowerCase());
//     });

//     return filteredResults;
//   }

//   getObjectById(id: string): any {
//     const parsedId = parseInt(id, 10);
//     console.log(
//       '🚀 ~ file: search.service.ts:59 ~ SearchService ~ getObjectById ~ parsedId:',
//       parsedId,
//     );
//     const result = searchResults.find((item) => item.id === parsedId);
//     console.log(
//       '🚀 ~ file: search.service.ts:59 ~ SearchService ~ getObjectById ~ result:',
//       result,
//     );
//     if (!result) {
//       throw new NotFoundException(
//         'No se encontró el objeto con el ID especificado.',
//       );
//     }
//     return result;
//   }
// }


import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SearchResult } from './search-result.entity';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(SearchResult)
    private searchResultRepository: Repository<SearchResult>,
  ) {}

  async searchObjectsByTitle(searchTerm: string): Promise<SearchResult[]> {
    const filteredResults = await this.searchResultRepository
      .createQueryBuilder('searchResult')
      .where('LOWER(searchResult.title) LIKE LOWER(:searchTerm)', {
        searchTerm: `%${searchTerm}%`,
      })
      .getMany();

    return filteredResults;
  }

  async getObjectById(id: string): Promise<SearchResult> {
    const parsedId = parseInt(id, 10);
    const result = await this.searchResultRepository.findOne(parsedId);
    if (!result) {
      
      throw new NotFoundException('No se encontró el objeto con el ID especificado.');
    }
    return result;
  }
}
