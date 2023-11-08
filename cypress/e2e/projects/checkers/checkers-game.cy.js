import { checkerOperations } from "../../pageobject/operations/checkers.operation";

describe('Checkers Game - Orange Moves', () => {
  it('Should make five legal moves as orange, including taking a blue piece', () => {
    // Visit the Checkers Game
    cy.visit('https://www.gamesforthebrain.com/game/checkers/');

    checkerOperations.makeMove(2, 13, true);
    checkerOperations.makeMove(22, 33);
    checkerOperations.makeMove(42, 53);
    checkerOperations.makeMove(62, 73);
    checkerOperations.makeMove(31, 53);
    // if (checkerOperations.allowedToMakeMove) {
    // }
  });
});