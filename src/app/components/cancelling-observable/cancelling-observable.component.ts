import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer, Observable } from 'rxjs';

@Component({
  selector: 'app-cancelling-observable',
  templateUrl: './cancelling-observable.component.html',
  styleUrls: ['./cancelling-observable.component.css']
})
export class CancellingObservableComponent implements OnInit {

  inervalSubs!: Subscription;
  browserSubs!:Subscription;
  timer:number[] = [];


  ngOnInit(): void {
    const customObs =  new Observable<number>(observer=>{
      let i = 0;
      let interval = setInterval(()=>{
        console.log('inside custom obervable');
        observer.next(i++);
      },1000)

      return ()=>{
        console.log('called when cacelling');
        clearInterval(interval)
      }
    });

    this.inervalSubs = customObs.subscribe({
      next:(data)=>{
        console.log(new Date().toLocaleTimeString() +' '+data);
      },
      error:error=>{
        console.log(error)
      }
    })

    this.browserSubs = customObs.subscribe({
      next:(data:number)=>{
        this.timer.push(data);
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  clearInetrval() {
    this.inervalSubs.unsubscribe();
    this.browserSubs.unsubscribe();
  }
}
