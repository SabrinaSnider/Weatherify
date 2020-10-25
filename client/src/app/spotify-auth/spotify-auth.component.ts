import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-spotify-auth',
  templateUrl: './spotify-auth.component.html',
  styleUrls: ['./spotify-auth.component.scss']
})
export class SpotifyAuthComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  hello(): void {
    console.log("hello!");
    this.http.get("http://localhost:3000/api/spotify/login").subscribe((data) => {
      console.log(data, data["redirect"])
      // router.navigate([data.]);
    })
  }

  ngOnInit() {
  }

}
