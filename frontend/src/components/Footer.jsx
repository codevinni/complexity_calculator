function Footer() {
    
    return(
        <div className="flex justify-between">

            <p className="text-xs text-neutral-400 mt-2">
                Note: Currently, only JavaScript code supported
            </p>

            <button className="flex p-1 items-center text-neutral-50 hover:text-neutral-300 transition">
                <span>Upload</span>
            </button>

        </div>
    )
}

export default Footer;