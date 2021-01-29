import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/serices/user.service';

@Component({
  selector: 'app-edite',
  templateUrl: './edite.component.html',
  styleUrls: ['./edite.component.scss']
})
export class EditeComponent implements OnInit {
id?;
  constructor(private service:UserService) { }

  ngOnInit() {
    // this.service.edite(this.id)

  }

}
