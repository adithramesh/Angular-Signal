import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
count = signal(0)
doubleCount = computed(()=> this.count() * 2)


constructor(){
  console.log("count signal:",this.count());
  effect(()=>{
    console.log("count signal:",this.count());
    console.log("count signal double :",this.doubleCount());
  })
  
}

increment(){
return this.count.update((c)=>c+1)
}

decrement(){
return this.count.update(c=>c-1)
}



reset(){
return this.count.set(0)
}

}
