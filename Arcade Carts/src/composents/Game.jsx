


const gameImg = {
    img1: 'https://miarcade.com/wp-content/uploads/2023/03/space-invaders-arcade.png',
    img2: 'https://www.fizzcreations.com/wp-content/uploads/2020/01/PAC-MAN-Banner.jpg',
    img3: 'https://i.ytimg.com/vi/f7kpgiLqbWc/maxresdefault.jpg',
    img4: 'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_superghoulsnghosts/WiiUVC_SuperGhoulsnGhosts_01.png',
};


const Game = () => {
    return (
        <div>
            <section className="section">
                <div className="arcaderoom">
                    <div className="imagearcade">
                        <img className='imgarcadegirl' src="https://t4.ftcdn.net/jpg/05/73/11/75/360_F_573117575_oKsFFIIRgshrlbNphZB2Fg2biKX7dVZ1.jpg" alt="" />
                    </div>
                    <div className="arcadepresentation">
                        <h1>Arcade Zone</h1>
                        <p className="textarcade">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Game;