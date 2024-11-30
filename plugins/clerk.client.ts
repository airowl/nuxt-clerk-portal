import { Clerk } from '@clerk/clerk-js';

//export default defineNuxtPlugin({
//    name: 'clerk-client',
//    async setup(nuxtApp) {
        
//    },
//});

export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig();

    console.log('API base URL:', config.public.clerkSecretKey)
    const clerk = new Clerk(config.public.clerkSecretKey);

    await clerk.load();
    return {
        provide: {
            clerk: clerk,
        }
    }
});
