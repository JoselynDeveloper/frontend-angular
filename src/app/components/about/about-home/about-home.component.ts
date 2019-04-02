import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.css']
})
export class AboutHomeComponent implements OnInit {
  private title: string;
  private subtitle: string;
  private email: string;

  constructor() {
  	this.title = "Joselyn Abreu";
  	this.subtitle = "Desarrollador web";
  	this.email = "j_p_a_dominicano@hotmail.com";
   }

  ngOnInit() {
  }

}
