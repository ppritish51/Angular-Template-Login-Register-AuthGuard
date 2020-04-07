import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){ 
    this.router.navigate(['/welcome']);
    sessionStorage.removeItem("userId");
    sessionStorage.clear();
    console.log('session name',sessionStorage.getItem('userID'))
  }

}
