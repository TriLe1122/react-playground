export class Card {
  constructor(data) {
    this.id = data.id
    this.artist = data.artist
    this.attacks = data.attacks
    this.cardmarket = data.cardmarket
    this.retreatCost = data.convertedRetreatCost
    this.hp = data.hp
    this.images = data.images.large
    this.legalities = data.legalities
  }
}