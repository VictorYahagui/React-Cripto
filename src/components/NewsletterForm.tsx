import { FormEvent } from "react";

export function NewsletterForm() {
    function handleInviteEmail(event: FormEvent) {
        event.preventDefault();
    }
    return (

        <form onSubmit={handleInviteEmail} className="flex-1 flex flex-col items-start w-full gap-y-4 lg:flex-row lg:gap-x-10">
            <input className="input text-base placeholder:text-white placeholder:text-base" type="text" placeholder="Email" />
            <button type="submit" className="btn bg-white text-darkblue px-8 hover:bg-white/70">Inscreva-se</button>
        </form>
    )
}