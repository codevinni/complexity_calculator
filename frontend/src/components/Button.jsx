function Button({name, action}) {
    
    const variants = [
        {
            name: "Calculate",
            classList: "px-6 py-2 mb-3 bg-neutral-800 text-neutral-50 rounded-full hover:bg-neutral-700 transition",
        },
    ];

    const variant = variants.find((v) => v.name === name);

    return(
        <button onClick={action} className={variant?.classList}>
            <span>{name}</span>
        </button>
    );
}

export default Button;
