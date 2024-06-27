class Navbar {
    constructor() {
        this.navItems = [
            { name: 'Home', link: '#' },
            { name: 'About', link: '#' },
            { name: 'Servies', link: '#' },
            { name: 'Contact', link: '#' },
        ];
    }


    render() {
        let navbar = document.createElement('div');
        navbar.className = 'navbar__navbar';

        let navList = document.createElement('ul');
        navList.className = 'navbar__nav-list';

        this.navItems.forEach(item => { 
            let navItems = document.createElement('li');
            navItems.className = 'navbar__nav-items'
            let navLink = document.createElement('a');
            navLink.href = 'item.link';
            navLink.innerText = item.name;
            navItems.appendChild(navLink);
            navList.appendChild(navItems);
        });
        navbar.appendChild(navList);
        return navbar;
    }
};
export default Navbar;
    
