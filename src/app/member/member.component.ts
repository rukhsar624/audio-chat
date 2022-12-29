import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {
  show=false;
  ngOnInit(): void {
  }
  showform() {
  this.show = !this.show;
  console.log('show');


}

}
