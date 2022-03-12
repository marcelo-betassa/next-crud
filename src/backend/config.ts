import {getApp, getApps ,initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import 'firebase/firestore'

let app: any; 

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
}
 console.log('firebase length', getApps.length);
 
// Inicializando firebase
 app = !getApps().length ? initializeApp( firebaseConfig ) : getApp()
const dataBase = getFirestore(app);

export  { dataBase };