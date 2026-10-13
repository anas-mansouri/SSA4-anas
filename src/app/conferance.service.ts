import { Injectable } from '@angular/core';

export interface Conference {
  id: number;
  name: string;
  date: string;
  place: string;
}

@Injectable({ providedIn: 'root' })
export class ConferanceService {
  readonly conferences: Conference[] = [
    { id: 1, name: 'angular', date: '2023-01-01', place: 'tunis' },
    { id: 2, name: 'react', date: '2023-02-01', place: 'sfax' },
    { id: 3, name: 'vue', date: '2023-03-01', place: 'sousse' },
  ];

  findById(id: string | number): Conference | undefined {
    return this.conferences.find((conference) => conference.id === Number(id));
  }
}
