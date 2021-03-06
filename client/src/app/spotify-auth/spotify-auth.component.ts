import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-spotify-auth",
  templateUrl: "./spotify-auth.component.html",
  styleUrls: ["./spotify-auth.component.scss"],
})
export class SpotifyAuthComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  hello(): void {
    console.log("hello!");
    this.http
      .get("http://localhost:3000/api/spotify/auth")
      .subscribe((json) => {
        console.log(json, json["redirect"]);
        window.location.href = json["redirect"];
      });
  }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
  }
}
