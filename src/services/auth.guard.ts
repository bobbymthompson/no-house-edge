// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs/Rx';
// import { AuthenticationService } from './auth/authentication.service';

// @Injectable()
// export class AuthGuard implements CanActivate {

//     constructor(private router: Router, private auth: AuthenticationService) { }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

//         this.auth.IsAuthenticated()
//             .then((e) => {
//                 if (e) {
//                     return true;
//                 } else {
//                     // not logged in so redirect to login page with the return url
//                     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//                     return false;
//                 }
//             }).catch(() => {
//                 return false;
//             });
//     }
// }