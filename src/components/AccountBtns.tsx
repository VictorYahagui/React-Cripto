export function AccountBtns() {
    return (
        <div className="flex items-center font-medium">
            {/* Links Btn */}
            <a className="hover:text-blue transition" href="#">Login</a>
            {/* Separator */}
            <span className="mx-6 text-white/20 font-thin">|</span>
            {/* Register Btn */}
            <button className="btn h-[3.3rem] text-base px-8">Register</button>
        </div>
    )
}