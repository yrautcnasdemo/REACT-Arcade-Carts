const games = [
    {name: "Space-Invaders", year: "1978", image:'https://miarcade.com/wp-content/uploads/2023/03/space-invaders-arcade.png', desc: "Sortie en 1978 Space invader est un jeu d'action shooterf ezif ozijfejo jzeofezoj iozejof jezoijf oejoi jezojf" },
    {name: "Pac-Man", year: "1980", image:'https://www.fizzcreations.com/wp-content/uploads/2020/01/PAC-MAN-Banner.jpg', desc: "Sortie en 1980 Pac-Man est un jeu d'action shooterf ezif ozijfejo jzeofezoj iozejof jezoijf oejoi jezojf" },
    {name: "Donkey Kong", year: "1981", image:'https://freekong.org/images/donkey-kong-game-card.png', desc: "Sortie en 1981 Donkey Kong est un jeu d'action shooterf ezif ozijfejo jzeofezoj iozejof jezoijf oejoi jezojf" },
    {name: "Dragon's Lair", year: "1983", image:'https://i.ytimg.com/vi/Z3HpFDYaOrY/maxresdefault.jpg', desc: "Sortie en 1983 Dragon's Lair est un jeu d'action shooterf ezif ozijfejo jzeofezoj iozejof jezoijf oejoi jezojf" },

    {name: "OutRun", year: "1986", image:'https://i.ytimg.com/vi/ELUl-cAtUIE/maxresdefault.jpg', desc: "Sortie en 1986 OutRun est un jeu d'action shooterf ezif ozijfejo jzeofezoj iozejof jezoijf oejoi jezojf" },
    {name: "R-Type", year: "1987", image:'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/928390/ss_4e63101b09c5570a49279d7326af4708f196e412.1920x1080.jpg?t=1712034918', desc: "Sortie en 1987 R-Type est un jeu d'action shooterf ezif ozijfejo jzeofezoj iozejof jezoijf oejoi jezojf" },
    {name: "Double-Dragon", year: "1987", image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRua2_7Ab8FVd_bHdiclpCefPj4AoMsyC-L2g&s', desc: "Sortie en 1987 Double-Dragon est un jeu d'action shooterf ezif ozijfejo jzeofezoj iozejof jezoijf oejoi jezojf" },
    {name: "Golden Axe", year: "1989", image:'https://miro.medium.com/v2/resize:fit:640/1*VnFeK20tCIamUpkNllUUow.png', desc: "Sortie en 1989 Golden Axe est un jeu d'action shooterf ezif ozijfejo jzeofezoj iozejof jezoijf oejoi jezojf" },
    {name: "Final Fight", year: "1989", image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/Final-Fight-Banner.jpeg', desc: "Sortie en 1989 Final Fight est un jeu d'action shooterf ezif ozijfejo jzeofezoj iozejof jezoijf oejoi jezojf" },
    {name: "Street-Fighter II", year: "1991", image:'https://i.ytimg.com/vi/N7KTNKu0kn4/hqdefault.jpg', desc: "Sortie en 1991 Street-Fighter II est un jeu d'action shooterf ezif ozijfejo jzeofezoj iozejof jezoijf oejoi jezojf" },
    {name: "Super Ghouls 'n Ghosts", year: "1991", image:'https://www.nintendo.com/eu/media/images/06_screenshots/games_5/virtual_console_wii_u_3/wiiuvc_superghoulsnghosts/WiiUVC_SuperGhoulsnGhosts_01.png', desc: "Sortie en 1991 Super Ghouls 'n Ghosts est un jeu d'action shooterf ezif ozijfejo jzeofezoj iozejof jezoijf oejoi jezojf" },
    {name: "Super Metroid", year: "1994", image:'https://i.ytimg.com/vi/f7kpgiLqbWc/maxresdefault.jpg', desc: "Sortie en 1994 Super Metroid est un jeu d'action shooterf ezif ozijfejo jzeofezoj iozejof jezoijf oejoi jezojf" }
];

export default function Eachcards() {
    const arcadegameslist = games.map(game =>
            <div className='cardslistTable'>
                <div className='cardsPlace'>
                    <img className='imgcard' src={game.image} alt={game.name} />
                    <h3>{game.name}</h3>
                    <div>
                        <p className='descriptionCard'>{game.desc}</p>
                    </div>
                </div>
            </div>
    );

    return (
        <section className="section2">
        <div className='cardslistTable'>{arcadegameslist}</div>
        </section>
    );
}






