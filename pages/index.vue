<script lang="ts" setup>
const clerkStore = useClerkStore();
const { $clerk } = useNuxtApp();

const signInRef = ref<HTMLElement | null>(null);
const user = ref(null);
const session = ref(null);

const logout = () => {
    clerkStore.logout();
}

const openProfile = () => {
    clerkStore.openProfile();
}

const register = () => {
    clerkStore.renderRegisterComponent();
}

const login = () => {
    clerkStore.renderComponentLog();
}

onMounted(() => {
    clerkStore.isLoaded();
});
</script>

<template>
    <div>
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <a class="btn btn-ghost text-xl">Clerk Auth</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <li v-if="clerkStore.isLogged()">
                        <a @click="logout()">logout</a>
                    </li>
                    <li v-if="clerkStore.isLogged()">
                        <a @click="openProfile()">profile</a>
                    </li>
                    <li v-if="!clerkStore.isLogged()">
                        <a @click="register()">register</a>
                    </li>
                    <li v-if="!clerkStore.isLogged()">
                        <a @click="login()">login</a>
                    </li>
                </ul>
            </div>
        </div>
        <div ref="signInRef"></div>


    </div>
</template>