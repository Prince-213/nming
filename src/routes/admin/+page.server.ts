import { fail, redirect } from "@sveltejs/kit";
import { env } from '$env/dynamic/private'




export const actions = {
    login: async ({ request, cookies, url }) => {
        const data = await request.formData();

        const name = data.get("email")
        const pass = data.get("password")

        console.log(data)

        if (name == 'peternnalue@gmail.com' && pass == 'pas@adimin#123@nmi') {
            cookies.set("status", 'admin', {path: '/'})
            return { message: "Access Grandted", error: false }
            throw redirect(303, url.searchParams.get('redirectTo') || '/')
            
        }else {
            //cookies.delete("status")
            return fail(404, { message: "Access Denied", error: true })
        }

    

        
    },
};
