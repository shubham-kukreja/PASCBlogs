import { Component, OnInit } from '@angular/core';
import {EventService } from '../../services/event.service';
import {Params, Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  items: Array<any>

  constructor(
    public eventService: EventService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.eventService.getUsers()
    .subscribe(result => {
      this.items = result;
    })
  }
  viewDetails(item) {
    this.router.navigate(['/adminDetails/' + item.id]);
  }

}
