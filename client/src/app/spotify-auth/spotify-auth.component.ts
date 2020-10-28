import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-spotify-auth",
  templateUrl: "./spotify-auth.component.html",
  styleUrls: ["./spotify-auth.component.scss"],
})
export class SpotifyAuthComponent implements OnInit {
  code: string = undefined;
  token: string = undefined;
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.route.snapshot.queryParams.code) {
      this.code = this.route.snapshot.queryParams.code;
    }
    console.log("code", this.code);
  }

  login(): void {
    this.http
      .get("http://localhost:3000/api/spotify/auth")
      .subscribe((json) => {
        console.log(json, json["redirect"]);
        window.location.href = json["redirect"];
      });
  }

  getToken(): void {
    this.http
      .post("http://localhost:3000/api/spotify/token", { code: this.code })
      .subscribe((json) => {
        console.log(json);
      });
  }
}
