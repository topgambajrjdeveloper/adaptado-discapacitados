import { Component, OnInit, Input } from '@angular/core';
import { PresenceService } from '../../../services/presence.service';
import {Empleado} from '../../../models/index.class';
@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent implements OnInit {

  @Input() uid;

  presence$;

  constructor(private presence: PresenceService) { }

  ngOnInit() {
    this.presence$ = this.presence.getPresence(this.uid);
  }

}
