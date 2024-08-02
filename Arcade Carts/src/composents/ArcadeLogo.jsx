const logo = {
    imagelogo: 'https://forums.launchbox-app.com/uploads/monthly_2020_10/arcade_all-games.png.89ce764881eb6f5614653093dcc8ea05.png',
};

const ArcadeLogo = () => {
    return(
        <div>
            <img className='logo' src={logo.imagelogo} alt="logoArcade" />
        </div>
    )
};

export default ArcadeLogo;