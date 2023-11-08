import { checkersLocator } from "../locator/checkers.locator";

export class CheckerOperations {
   makeMove(spaceFrom, spaceTo, first) {
      if (!first) {
         cy.contains('Make a move', { timeout: 2000 });
         cy.wait(2000);
      }
      checkersLocator.elements.getSpaceFrom(spaceFrom).click();
      checkersLocator.elements.getSpaceTo(spaceTo).click();
   }
}
export const checkerOperations = new CheckerOperations;