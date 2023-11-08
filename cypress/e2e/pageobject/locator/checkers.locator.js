class Checkers {
    elements = {
        getSpaceFrom: (spacePlace) => cy.get(`img[src="you1.gif"][name="space${('0' + spacePlace).slice(-2)}"]`),
        getSpaceTo: (spacePlace) => cy.get(`img[src="gray.gif"][name="space${('0' + spacePlace).slice(-2)}"]`)
    }
}

export const checkersLocator = new Checkers;