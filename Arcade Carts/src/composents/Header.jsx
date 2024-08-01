const logo = {
    imagelogo: 'https://forums.launchbox-app.com/uploads/monthly_2020_10/arcade_all-games.png.89ce764881eb6f5614653093dcc8ea05.png',
};

const Header = () => {
    return (
        <div>
            <header>
                <div>
                    <img className='logo' src={logo.imagelogo} alt="logoArcade" />
                </div>
                <nav>
                    <a href="">Accueil</a>
                    <a href="">Cartes</a>
                    <a href="">A propos</a>
                </nav>
            </header>
        </div>
    );
};

export default Header;