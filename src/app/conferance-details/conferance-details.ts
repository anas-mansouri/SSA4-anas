import { Component, computed, input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConferanceService } from '../conferance.service';

@Component({
  selector: 'app-conferance-details',
  imports: [RouterLink],
  templateUrl: './conferance-details.html',
  styleUrl: './conferance-details.css',
})
export class ConferanceDetails {
  private readonly conferanceService = inject(ConferanceService);

  id = input.required<string>();
  conferance = computed(() => this.conferanceService.findById(this.id()));
}
