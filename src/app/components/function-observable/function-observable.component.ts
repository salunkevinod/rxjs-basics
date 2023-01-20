import { customObs } from './../../function';
import { Component, OnInit } from '@angular/core';
import { functionTest } from 'src/app/function';

@Component({
  selector: 'app-function-observable',
  templateUrl: './function-observable.component.html',
  styleUrls: ['./function-observable.component.css']
})
export class FunctionObservableComponent implements OnInit {



  ngOnInit(): void {
    console.log('before function call');
    console.log(functionTest());
    console.log('after function call');
    
    console.log('before observable call');
    customObs.subscribe(
      {
        next:(data: any)=>{
          console.log(data);
        },
        error:error=>{
          console.log(error);
        }
      }
    )
  }

}
