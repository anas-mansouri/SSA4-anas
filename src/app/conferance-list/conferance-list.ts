import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConferanceService } from '../conferance.service';

@Component({
  selector: 'app-conferance-list',
  imports: [RouterLink],
  templateUrl: './conferance-list.html',
  styleUrl: './conferance-list.css',
})
export class ConferanceList {
  constructor(private conferanceService: ConferanceService) {}

  get conferances() {
    return this.conferanceService.conferences;
  }

  inc(){alert('increment');}
}
