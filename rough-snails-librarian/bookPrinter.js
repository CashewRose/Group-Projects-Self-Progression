// Prints books to the DOM
const postBooks = (libDB) => {
    const printCardsArea = document.querySelector('#printCards')
    const fragment = document.createDocumentFragment();

    for (let key in libDB) {
        const card = cardStructure();
        const book = (libDB[key])

        for (let detail in book) {
            const el = document.createElement('p')
            if (typeof book[detail] === 'object') {
                book[detail].forEach(genre => {
                    const el = document.createElement('p')
                    el.textContent = genre;
                    card.appendChild(el)
                })
            }
            else {
                el.textContent = book[detail]
                card.appendChild(el)
            }
        }
        // card.addEventListener('click', addToLibrary) // Need to add this function
        fragment.appendChild(card)
    }
    printCardsArea.appendChild(fragment)
}

const cardStructure = () => {
    const structure = document.createElement('span');
    structure.classList.add('card-structure');
    return structure;
}

postBooks(libDB);