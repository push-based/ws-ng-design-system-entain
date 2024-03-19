// import { Component, Directive, inject, Input, ElementRef } from '@angular/core';

// @Directive({
//   selector: '[highlight]',
//   standalone: true,
//   host: { style: 'background: yellow' },
// })
// export class Highlight {
//   constructor() {
//     console.log('Highlight', inject(ElementRef));
//   }
// }

// @Component({
//   selector: 'app-actor',
//   template: `<strong> {{ actor }} </strong>`,
//   standalone: true,
// })
// export class ActorComponent {
//   @Input() actor?: string;

//   constructor() {
//     console.log('ActorComponent', inject(ElementRef));
//   }
// }

// @Component({
//   selector: 'movie-card',
//   template: ` <ng-content /> `,
//   standalone: true,
// })
// export class MovieCard {
//   constructor() {
//     console.log('MovieCard', inject(ElementRef));
//   }
// }

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [MovieCard, Highlight, ActorComponent],
//   template: `
//     <movie-card>
//       <img [src]="movie.poster_path" />
//       <h3 highlight>{{ movie.title }}</h3>
//       <p>{{ movie.overview }}</p>
//       @for (actor of movie.actors; track actor) {
//         <app-actor [actor]="actor" />
//       }
//     </movie-card>
//   `,
// })
// export class AppComponent {
//   movie = {
//     poster_path:
//       'https://image.tmdb.org/t/p/w185_and_h278_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
//     title: 'The Godfather',
//     overview:
//       'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family.',
//     actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
//   };
// }
