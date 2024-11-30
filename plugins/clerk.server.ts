import { createClerkClient } from '@clerk/backend'

export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig();

    console.log('API base URL:', config.public.clerkSecretKey)
    const clerkServer = createClerkClient({secretKey: config.public.clerkSecretKey});

    return {
        provide: {
            clerkServer: clerkServer,
        }
    }
});
