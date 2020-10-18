import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../reducers';

@Component({
  selector: 'app-hello-response',
  templateUrl: './hello-response.component.html',
  styleUrls: ['./hello-response.component.css']
})
export class HelloResponseComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
