import { writable } from "svelte/store";

export const requests = writable([
    {
        id: '12',
        name: 'James Jordan',
        email: 'princ@g',
        brand: 'tesla',
        service: 'sdsf',
        status: 'pending'
    }
]);