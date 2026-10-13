import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { Header } from './header/header';
<<<<<<< HEAD
import { ConferanceList } from './conferance-list/conferance-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, Footer,ConferanceList],
=======
import { ConferenceList } from './conference-list/conference-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, Footer, ConferenceList],
>>>>>>> 0da46011c4d41811833ef7f32ded61b4167333ce
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ssa4');
}
