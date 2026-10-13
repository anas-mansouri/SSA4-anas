import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
<<<<<<< HEAD
  nom ="ons";
=======
  nom ="Anas";
>>>>>>> 0da46011c4d41811833ef7f32ded61b4167333ce
  imgurl="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/1280px-Angular_gradient_logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=thumbnail"

  bonjour() {alert('Bonjour ');}


  nom1="amen"

  students=["Ahmed","Ali","Amine","Aymen","Anis"]
  students2=[
    {name:"Ahmed",age:20},
    {name:"Ali",age:21},
    {name:"Amine",age:22},
    {name:"Aymen",age:23},
    {name:"Anis",age:24}
  ]

<<<<<<< HEAD
//
count=0;
//signal
counts=signal(0);

incrementSimple(){
  this.count++;
}
///signal
increment() {
    this.counts.update(v => v + 1);
=======
  count=0;
  counts=signal(0);
  incrementSimple(){
    this.count++;
  }
  increment(){
    this.counts.update(v => v+1);
>>>>>>> 0da46011c4d41811833ef7f32ded61b4167333ce
  }
}
