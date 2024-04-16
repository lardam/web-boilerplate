//Panel de control

import { auth } from "@/auth"

export default async function Page(){
    const user = await auth();

    return(
        <section className="db-content">
            <h3 className="db-title">Bienvenido {user?.user?.name} al panel de control!</h3>
        </section>
    )
}