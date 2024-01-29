import type { PageServerLoad } from './$types';
import { fail, redirect } from "@sveltejs/kit";
import { env } from '$env/dynamic/private'

import { goto } from '$app/navigation';
import { supabase } from '$lib/supabaseClient';


export const load = (async ({ cookies, url }) => {


    if (!cookies.get("status")) {
        throw redirect(307, `/admin/?redirectTo=${url.pathname}`)
    }

    
    let { data, error } = await supabase
    .from('nmi_requests')
    .select('*')
        
    return {
        data: data ?? []
    };
}) satisfies PageServerLoad;


