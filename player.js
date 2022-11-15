class Player {
    constructor(num,token,win) {
        this.id = num
        this.token = token
        this.wins = win
    }
    increaseWins(){
        this.wins +=1
    }
}

module.exports = Player