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
            <button className="btn btn-info" data-testid="sigin-anon" onClick={() => {
              firebase.auth().signInAnonymously();
            }}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Login   
            </button>
            <button className="btn btn-info" onClick={() => {
              firebase.auth.signOut();
            }}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>

            <FirebaseAuthConsomer>
              {({isSignedIn, user, providerId}) => {
                return  <pre style={{height: 300, overflow: "auto"}}>
                          {JSON.stringfy({isSignedIn, user, providerId}, null, 2)}
                        </pre>
              }}
            </FirebaseAuthConsomer>
            <IfFirebaseAuthed>
              {() => { return <p>Você está conectado!</p>; }}
            </IfFirebaseAuthed>
            <IfFirebaseAuthedAnd filter={({providerId}) => providerId !== "anonymous"}>
              {({providerId}) => {
                return <p>Voce está conectado com: {providerId}</p>;
              }}
            </IfFirebaseAuthedAnd>
          </FirebaseAuthProvider>
}

export default Login;