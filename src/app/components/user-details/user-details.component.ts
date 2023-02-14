import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  model = {
    name: '',
    email: '',
    address: '',
  }
  
  users:any[] = [{
    name: 'Luiz',
    email: 'eamai@eaas.asdf',
    address: 'asdfasd asdfadsf asd'
  }]
  
  addUser() {
    this.users.push(this.model)
  }
  
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
  
  
}
