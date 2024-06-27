class Footer {
    constructor() {
        this.menuItems = [
            { name: "Home", url: "/Home" },
            { name: "About", url: "/About" },
            { name: "Services", url: "/Services" },
            { name: "Contact", url: "/Contact" }
        ];
        this.accCount = [
            { name: "Profile" },
            { name: "Setting" },
            { name: "Billing" },
            { name: "Notifications" }
        ];
        this.location = [
            { address: "Nguyen Huu Tho, Phuoc Kieng, Nha Be, TP.HCM" },
            { address: "School: MindX" },
            { address: "Pleiku, Gia Lai"}
        ];
        this.contactList = [
            {name:"Phone : +84-971141645",},
            {name:"Email : Ldmanh2504@gmail.com"},
            {name:"Instagram : _lemanh_2596"},
        ]
    }

    createMenu() {
        // const menuHeader = document.createElement("h3");
        // menuHeader.textContent="About";
        // menuSection.appendChild(menuHeader);
        const menuList = document.createElement("ul");
        this.menuItems.forEach((item) => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = item.url;
            link.textContent = item.name;
            listItem.appendChild(link);
            menuList.appendChild(listItem);
        });
        return menuList;
    }

    createAccCount() {
        const countList = document.createElement("ul");
        this.accCount.forEach((count) => {
            const listItem = document.createElement("li");
            listItem.textContent = count.name;
            countList.appendChild(listItem);
        });
        return countList;
    }

    createLocation() {
        const locationList = document.createElement("ul");
        this.location.forEach((loc) => {
            const listItem = document.createElement("li");
            listItem.textContent = loc.address;
            locationList.appendChild(listItem);
        });
        return locationList;
    }

    createContact(){
        const contactList = document.createElement("ul");
        this.contactList.forEach((cont) => {
            const listItem = document.createElement("li");
            listItem.textContent = cont.name;
            contactList.appendChild(listItem);
        });
        return contactList
    }
    render() {
        const menuSection = document.createElement("section");
        menuSection.className = "footer-col";
        menuSection.appendChild(this.createMenu());
        

        const accCountSection = document.createElement("section");
        accCountSection.className = "footer-col";
        accCountSection.appendChild(this.createAccCount());

        const locationSection = document.createElement("section");
        locationSection.className = "footer-col";
        locationSection.appendChild(this.createLocation());

        const contactSection = document.createElement("section");
        contactSection.className = "footer-col";
        contactSection.appendChild(this.createContact());

        const footerDiv = document.createElement("div");
        footerDiv.className = "footer";
        footerDiv.appendChild(menuSection);
        footerDiv.appendChild(accCountSection);
        footerDiv.appendChild(locationSection);
        footerDiv.appendChild(contactSection);  

        document.body.appendChild(footerDiv);

        return footerDiv;
    }
}

export default Footer;
