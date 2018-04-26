import { Injectable } from '@angular/core';
import {CanActivate, CanActivateChild} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild{

  constructor() { }

  canActivate(){
    console.log('checking for log in of dashboard')
    return true
  }

  canActivateChild(){
      console.log('checking for log in of children dashboard')
      return true
  }

}
