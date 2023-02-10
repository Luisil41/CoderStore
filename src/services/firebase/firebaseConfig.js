import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


export const firebaseConfig = {
    apiKey: "AIzaSyDImmncoW36S7aNlKuDEvfu2H8NHuGbusM",
    authDomain: "coderhouse-motos.firebaseapp.com",
    projectId: "coderhouse-motos",
    storageBucket: "coderhouse-motos.appspot.com",
    messagingSenderId: "693448170512",
    appId: "1:693448170512:web:b04a5ef3d5b29637b47e95"
  };


export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)



