import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Department} from "./models/department";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'departement';
  private _jsonURL = 'assets/departement.json';
  departements: Department[] = [];


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
      this.departements = data;
    });
  }

  public getJSON(): Observable<Department[]> {
    return this.http.get<Department[]>(this._jsonURL);
  }
}
