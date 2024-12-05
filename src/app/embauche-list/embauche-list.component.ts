import { Component, OnInit } from '@angular/core';
import { Cv } from '../models/cv.model';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-embauche-list',
  templateUrl: './embauche-list.component.html',
  styleUrls: ['./embauche-list.component.css'],
})
export class EmbaucheListComponent implements OnInit {
  embaucheList: Cv[] = [];

  constructor(private embaucheService: EmbaucheService) {}

  ngOnInit(): void {
    this.embaucheList = this.embaucheService.getEmbaucheList();
  }
}
