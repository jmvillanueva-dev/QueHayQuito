const menuItems = [
    { name: "Destinos", href: "#destionations" },
    { name: "Sugerencias", href: "#suggestions" },
    { name: "Blog", href: "#blog" },
    { name: "Tienda", href: "#tienda" },
    { name: "Contáctanos", href: "#contactanos" },
];

const navList = document.getElementById("navList");

menuItems.forEach(item => {

    const li = document.createElement("li");

    li.innerHTML = `
        <a href="${item.href}" class="text-sm text-black transition-colors">
            <div class="w-32 text-center py-1 transition-all duration-150 ease-in-out hover:font-bold hover:text-bluebrand hover:outline-1 hover:shadow-[4px_4px_0px_0px_#0057d9]">
                ${item.name}
            </div>
        </a>
    `;

    navList.appendChild(li);
});