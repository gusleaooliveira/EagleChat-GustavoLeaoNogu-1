import React from 'react'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 
  { FirebaseAuthProvider, FirebaseAuthConsumer, IfFirebaseAuthed, IfFirebaseAuthedAnd } 
  from '@react-firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { config } from '../../config.js';

function Login(){
  return  <FirebaseAuthProvider {...config} firebase={firebase}>
            <button className="btn btn-info" onClick={() => {
              const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
              firebase.auth().signInWithPopup(googleAuthProvider);
            }}>

              <FontAwesomeIcon icon={faUserSecret} /> Login
            </button>
            <button className="btn btn-info" >

              <FontAwesomeIcon icon={faSignOutAlt} /> Login
            </button>
            <button className="btn btn-info">

              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
          </FirebaseAuthProvider>
}

export default Login;