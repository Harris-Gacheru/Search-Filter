import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: string[] = [
    'Harrison',
    'Joram',
    'Lillian',
    'Clara',
    'Ciara',
    'Claranta',
    'Jay',
    'Lilly',
    'Gerald',
    'Hunter',
    'Ibra'
  ]

  searchForm = this.fb.group({
    searchstring: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
