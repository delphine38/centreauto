import { Component, OnInit } from '@angular/core';
import { AccueilService } from '../accueil.service';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  dataVoitures!: any[];

  voitures: any = [];


  constructor(private serviceVoiture: AccueilService) { }

  ngOnInit(): void {
    this.serviceVoiture.getAnnonceDelphine().subscribe(r => {
      this.dataVoitures = r;
      this.voitures = r;
      console.log(this.dataVoitures);
    });
  }

}
