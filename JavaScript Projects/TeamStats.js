const team = {
    _players: [
        {
            firstName: 'Jason',
            lastName: 'Crandall',
            age: 21
        },
        {
            firstName: 'Stephen',
            lastName: 'Crandall',
            age: 24
        },
        {
            firstName: 'Rylie',
            lastName: 'Crandall',
            age: 19
        }
    ],
    _games: [
        {
            opponent: 'Cubs',
            teamPoints: 3,
            opponentPoints: 2
        },
        {
            opponent: 'Yankees',
            teamPoints: 2,
            opponentPoints: 4
        },
        {
            opponent: 'Mariners',
            teamPoints: 2,
            opponentPoints: 1
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName,
            lastName,
            age
        };
        this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent,
            teamPoints,
            opponentPoints
        };
        this._games.push(game);
    }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Astros', 4, 1);
team.addGame('Red Socks', 3, 3);
team.addGame('White Socks', 6, 0);

console.log(team.players);
console.log(team.games);
