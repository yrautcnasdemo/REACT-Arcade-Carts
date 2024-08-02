import ArcadeLogo from './ArcadeLogo';

const Header = () => {
    return (
        <div>
            <header>
                <ArcadeLogo />
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