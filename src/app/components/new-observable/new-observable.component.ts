import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.css'],
})
export class NewObservableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const newObservable = new Observable<number>((observer) => {
      for (let i = 0; i <= 10; i++) {
        observer.next(i);
        if (i == 7) {
          observer.error('error occurred');
        }
      }
      observer.complete();
    });


    newObservable.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('all done');
      },
    });
  }
}
