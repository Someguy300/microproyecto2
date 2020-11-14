import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public afAuth: AngularFireAuth) { }

  loginWithGoogle(): Promise<void> {
    return this.authLogin(new auth.GoogleAuthProvider())
      .then((response) => {
        if (response) {
          localStorage.setItem('user', JSON.stringify(response));
        }
      })
      .catch((err) => console.log(err));
  }

  /**
   * GET THE CURRENT USER
   */
  getCurrentUser(): Observable<User> {
    return this.afAuth.authState;
  }

  /**
   * USER LOGOUT
   */
  logout(): Promise<void> {
    return this.afAuth
      .signOut()
      .then(() => {
        localStorage.removeItem('user');
      })
      .catch((err) => console.log(err));
  }

  /**
   * RETURN TRUE IF THE USER IS LOGGED IN
   */
  isAuthenticated(): boolean {
    const user: User = JSON.parse(localStorage.getItem('user')) ?? null;

    return user !== null;
  }

  /**
   * LOGIN WITH DIFFERENT FIREBASE PROVIDERS
   * @param provider
   */
  private authLogin(provider: auth.AuthProvider): Promise<auth.UserCredential> {
    return this.afAuth.signInWithPopup(provider);
  }

}
