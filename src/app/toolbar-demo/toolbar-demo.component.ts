import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toolbar-demo',
  templateUrl: './toolbar-demo.component.html',
  styleUrls: ['./toolbar-demo.component.scss']
})
export class ToolbarDemoComponent implements OnInit {
  username: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((params) =>{ 

    	alert(params.username);
    	this.username = params.username
    });
  }

}
