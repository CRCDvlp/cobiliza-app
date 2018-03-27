import firebase from 'firebase';

export class Users{

    register(email:string, pass:string){
        return firebase.auth().createUserAndRetrieveDataWithEmailAndPassword( email, pass);
    }

    login(email:string, pass:string){
        return firebase.auth().signInWithEmailAndPassword( email, pass);
    }

    logout(){
        return firebase.auth().signOut();
    }
}