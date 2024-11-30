import { defineStore } from 'pinia';


export const useClerkStore = defineStore('clerkStore', () => {
    const { $clerk } = useNuxtApp();

    const user = ref();
    const session = ref();
    const loaded = ref();

    function isLogged(){
        return user.value ? true : false;
    }

    // check if is loaded
    async function isLoaded() {
        loaded.value = $clerk.loaded;
        user.value = $clerk.user;
        session.value = $clerk.session;
        return loaded.value;
    }

    // print login component
    async function renderComponentLog() {
        if(!user.value){
            $clerk.openSignIn();
        }
    }

    // logout
    async function logout(){
        if(user.value){
            $clerk.signOut();
        }
    }

    async function openProfile(){
        if(user.value){
            $clerk.openUserProfile();
        }
    }

    // print register component
    async function renderRegisterComponent() {
        if(!user.value){
            $clerk.openSignUp();
        }
    }

    // test
    async function test() {
        
    }

    return {
        test,
        isLogged,
        isLoaded,
        renderComponentLog,
        renderRegisterComponent,
        logout,
        openProfile
    }
});
