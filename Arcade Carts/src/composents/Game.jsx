import React from 'react';

const gameImg = {
    img1: 'https://miarcade.com/wp-content/uploads/2023/03/space-invaders-arcade.png',
    img2: 'https://www.fizzcreations.com/wp-content/uploads/2020/01/PAC-MAN-Banner.jpg',
    img3: 'https://i.ytimg.com/vi/f7kpgiLqbWc/maxresdefault.jpg',
    img4: 'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_superghoulsnghosts/WiiUVC_SuperGhoulsnGhosts_01.png',
};

//   const games = [
//     {title: 'Space-Invaders', year: '1978',image:'https://miarcade.com/wp-content/uploads/2023/03/space-invaders-arcade.png', id: 1},
//     {title: 'Pac-Man', year: '1980',image:'https://www.fizzcreations.com/wp-content/uploads/2020/01/PAC-MAN-Banner.jpg', id: 2},
//     {title: 'Dragon\'s Lair ', year: '1983',image:'https://i.ytimg.com/vi/Z3HpFDYaOrY/maxresdefault.jpg', id: 3},
//     {title: 'OutRun', year: '1986',image:'https://i.ytimg.com/vi/ELUl-cAtUIE/maxresdefault.jpg', id: 4},
//     {title: 'Double-Dragon', year: '1987',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRua2_7Ab8FVd_bHdiclpCefPj4AoMsyC-L2g&s', id: 5},
//     {title: 'Golden Axe', year: '1989',image:'https://miro.medium.com/v2/resize:fit:640/1*VnFeK20tCIamUpkNllUUow.png', id: 6},
//     {title: 'Street-Fighter II', year: '1991',image:'https://i.ytimg.com/vi/N7KTNKu0kn4/hqdefault.jpg', id: 7},
//     {title: 'Super Ghouls \'n Ghosts', year: '1991',image:'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_superghoulsnghosts/WiiUVC_SuperGhoulsnGhosts_01.png', id: 8},
//     {title: 'Super Metroid', year: '1994',image:'https://i.ytimg.com/vi/f7kpgiLqbWc/maxresdefault.jpg', id: 9}
//   ];

const Game = () => {
    return (
        <div>
            <div className='cardslist'>
                <div className='cardsPlace'>
                    <img className='imgcard' src={gameImg.img1} alt="SpaceInvaders" />
                    <h3>Space invaders</h3>
                <div>
                    <p className='descriptionCard'>Sortie en 1978 Space invader est un jeu d'action shooterf ezif ozijfejo jzeofezoj iozejof jezoijf oejoi jezojf</p>
                </div>
                </div>

                <div className='cardsPlace'>
                    <img className='imgcard' src={gameImg.img2} alt="pacman" />
                    <h3>Pac Man</h3>
                <div>
                    <p className='descriptionCard'>Sortie en 1980 Pac-Man est un jeu d'action shooterf ezif ozijfejo jzeofezoj iozejof jezoijf oejoi jezojf</p>
                </div>
                </div>
                
                <div className='cardsPlace'>
                    <img className='imgcard' src={gameImg.img4} alt="ghoulsNghost" />
                    <h3>Super ghouls 'N ghost</h3>
                <div>
                    <p className='descriptionCard'>Sortie en 1991 Super Ghouls 'n Ghosts est un jeu d'action shooterf ezif ozijfejo jzeofezoj iozejof</p>
                </div>
                </div>
                
                <div className='cardsPlace'>
                    <img className='imgcard' src={gameImg.img3} alt="metroid" />
                    <h3>Super Metroid</h3>
                <div>
                    <p className='descriptionCard'>Sortie en 1994 Super Metroid est un jeu d'action shooterf ezif ozijfejo jzeofezoj iozejof jezoijf oejoi jezojf</p>
                </div>
                </div>        
            </div>
        </div>
    );
};

export default Game;