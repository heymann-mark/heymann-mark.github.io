import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ CommonModule,FormsModule,
    ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  name:any;
  subject:any;
  email:any;
  message:any;
  model: any = {};
//Here the data is being submitted by post to formspree,
  //and they are sending it to me via email
  onSubmit(name:any, subject:any, email:any, message:any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/mqkwykjg',
       { name: name, subject: subject, replyto: email, message: message },
       { 'headers': headers }).subscribe(
          response => {
          console.log(response);
        }
       );
 }
}
