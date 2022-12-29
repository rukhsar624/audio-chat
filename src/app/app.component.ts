import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public get width(){
      return window.innerWidth;
  }
  title = 'audio';
  show=true;
  data={name:'John',img:'../assets/image/profile2.jpg'};
  ngOnInit(): void {
  }
  showform(value:any) {
  this.show = !this.show;
  console.log('show');
  this.savedata(value)
}
savedata(datavalue:any){
 this.data=datavalue;
 console.log("hello data");

}
}

