What we're learning-

1. Stateful vs Stateless Backends
2. State management in a Backend app
3. Singleton Pattern
4. Pub Subs + Singleton pattern

Stateless servers -

Usually when you write HTTP servers, they don't hold any state This means, they don't have any in memory variables that they use The usually rely on the database for state.

Advantages -

1. Users can connect to a random server, there is no need of stickiness
2. Can autoscale up and down easily and simply decide where to route traffic based on CPU usage.

Stateful servers -

A lot of times, you make servers hold state
Good example of this are -

1. Creating an in memory cache
2. Storing the state of a Game in case of a realtime game
3. Storing a list of 10 most latest chats in memory for a chat application

In case of 1, there is no need of stickiness
In case of 2 and 3, there is need of stickiness

Stickiness -

Making sure that the user who is interested in a specific room, gets connected to a specific server.

Singleton Pattern - It is a pattern when you only give permission to create a single instance of a class.

interface Game {
id: string;
whitePlayerName: string;
blackPlayerName: string;
moves: string[];
}

export class GameManager {
games: Game[] = [];
private static instance: GameManager;
private constructor() {
this.games = [];
}

    static getInstance() {
        // create a single instance of GameManager and return it
        if (GameManager.instance) {
            return GameManager.instance
        }
        GameManager.instance = new GameManager();
        return GameManager.instance
    }

    addMove(gameId: string, move: string) {
        console.log(`Adding move ${move} to game ${gameId}`)
        const game = this.games.find(game => game.id === gameId);
        game?.moves.push(move)
    }

    addGame(gameId: string) {
        const game = {
            id: gameId,
            whitePlayerName: "Alice",
            blackPlayerName: "Denzo",
            moves: []
        }

        this.games.push(game);
    }

    log() {
        console.log(this.games);
    }

}

export const gameManager = GameManager.getInstance();

How to create a pub sub

Create a PubSubManager class(singleton)
