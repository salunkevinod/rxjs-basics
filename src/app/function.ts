import { Observable } from 'rxjs';


export function functionTest() {
    console.log('in function call');
    return 1;
    return 2;
}


export const customObs = new Observable(observer=>{
    console.log('in observable');
    observer.next('1');
    observer.next('2');
    setTimeout(() => {
        observer.next('3');
    }, 2000);
    // observer.error('error occurred')
});