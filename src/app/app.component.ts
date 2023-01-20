import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'rxjs-basics';

  // @ViewChild('testButton',{static:true}) btnElement:ElementRef | undefined; 

  // empArr = [
  //   { name: 'vinod', age: 32 },
  //   { name: 'max', age: 29 },
  //   { name: 'tanvi', age: 30 },
  // ];

  // promise = new Promise((resolve,reject)=>{
  //   setTimeout(() => {
  //     resolve('this is a promise');
  //   }, 3000);
  // })

  // empObservable$ = from(this.empArr).subscribe({
  //   next:(data)=>{
  //     console.log(data);
  //   },
  //   error:(error)=>{
  //     console.log(error);
  //   },
  //   complete:()=>{
  //     console.log('completed');
  //   }
  // })

  // promiseObs$ = from(this.promise).subscribe({
  //   next:(data)=>{
  //     console.log('promise data',data);
  //   },
  //   error:(error)=>{
  //     console.log(error)
  //   },
  //   complete:()=>{
  //     console.log('promise obs is completed')
  //   }
  // })

  ngAfterViewInit(): void {
    // fromEvent(this.btnElement?.nativeElement,'click').subscribe({
    //   next:(data)=>{
    //     console.log('data from fromevent obs')
    //   },
    //   error:(error)=>{
    //     console.log(error)
    //   },
    //   complete:()=>{
    //     console.log('fromeventObs completed')
    //   }
    // })
  }

}
