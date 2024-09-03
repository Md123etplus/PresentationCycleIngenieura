import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";

export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthenticationService);
  const router = inject(Router);

  if(!auth.authenticated) {
    router.navigateByUrl('/login')
    return false
  }
  return true
};
