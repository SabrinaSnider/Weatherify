import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class SpotifyAuthService {
  constructor(private router: Router) {}

  // the Router call canActivate() method,
  // if canActivate is registered in Routes[]
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    // here we check if user is logged in or not

    return new Promise((resolve, reject) => {});
  }
}
