// This class stores data for locating sprites on scenes:
class GameData {
  constructor () {
    this.TABLE_X = 630;
    this.TABLE_Y = 690;
    this.coordinatesX = 150;
    this.coordinatesY = 325;
    this.scene_list = {
      MENU: 'Menu',
      MAIN: 'Main',
      TABLET: 'Tablet',
      SHELVE: 'Shelve',
      STOVE: 'Stove'
    };
    this.TIME = 15; // Seconds
  }
}

// eslint-disable-next-line no-unused-vars
let game_data = new GameData();
