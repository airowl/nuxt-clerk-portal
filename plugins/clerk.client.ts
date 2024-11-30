import { Clerk } from '@clerk/clerk-js';

export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig();

    const clerk = new Clerk(config.public.clerkSecretKey);

    await clerk.load();
    return {
        provide: {
            clerk: clerk,
        }
    }
});
