
const customerDB = {
    cole : Object.create(null, {
        favGenres: {
            enumerable: true,
            writable: false,
            value: []
        },
        bookShelf: {
            enumerable: true,
            writable: true,
            value: []
        },
        firstName: {
            enumerable: true,
            writable: false,
            value: "Cole"
        },
        lastName: {
            enumerable: true,
            writable: false,
            value: "Doster"
        },
        address: {
            enumerable: true,
            writable: false,
            value: "3302 Overlook Dr."
        },
        lcNumber: {
            enumerable: true,
            writable: true,
            value: ""
        },
        checkout: {
            enumerable: true,
            writable: false,
            value: function(book) {
                if (libDB[book].checkedout === false){
                    this.bookShelf.push(libDB[book]);
                    libDB[book].checkedout = true;
                    libDB[book].dueDate = getDueDate()
                }
            }
        },
        return: {
            enumerable: true,
            writable: false,
            value: function(book) {
                libDB[book].dueDate = "";
                let foundIt = null;
                this.bookShelf.forEach((element, idx) => {
                    if (libDB[book].title === element){
                        foundIt = idx;
                    }
                    this.bookShelf.splice(idx, 1)
                });
                libDB[book].checkedout = false;
            }
        }

    }),
    cashew : Object.create(null, {
        favGenres: {
            enumerable: true,
            writable: false,
            value: []
        },
        bookShelf: {
            enumerable: true,
            writable: true,
            value: []
        },
        firstName: {
            enumerable: true,
            writable: false,
            value: "Cashew"
        },
        lastName: {
            enumerable: true,
            writable: false,
            value: "Agnoletti"
        },
        address: {
            enumerable: true,
            writable: false,
            value: "1500 Pennsylvania Ave."
        },
        lcNumber: {
            enumerable: true,
            writable: true,
            value: ""
        },
        checkout: {
            enumerable: true,
            writable: false,
            value: function(book) {
                if (libDB[book].checkedout === false){
                    this.bookShelf.push(libDB[book]);
                    libDB[book].checkedout = true;
                    libDB[book].dueDate = getDueDate()
                }
            }
        },
        return: {
            enumerable: true,
            writable: false,
            value: function(book) {
                libDB[book].dueDate = "";
                let foundIt = null;
                this.bookShelf.forEach((element, idx) => {
                    if (libDB[book].title === element){
                        foundIt = idx;
                    }
                    this.bookShelf.splice(idx, 1)
                });
                libDB[book].checkedout = false;
            }
        }

    }),
    kyle : Object.create(null, {
        favGenres: {
            enumerable: true,
            writable: false,
            value: []
        },
        bookShelf: {
            enumerable: true,
            writable: true,
            value: []
        },
        firstName: {
            enumerable: true,
            writable: false,
            value: "Kyle"
        },
        lastName: {
            enumerable: true,
            writable: false,
            value: "Ducharme"
        },
        address: {
            enumerable: true,
            writable: false,
            value: "500 Interstate Blvd."
        },
        lcNumber: {
            enumerable: true,
            writable: true,
            value: ""
        },
        checkout: {
            enumerable: true,
            writable: false,
            value: function(book) {
                if (libDB[book].checkedout === false){
                    this.bookShelf.push(libDB[book]);
                    libDB[book].checkedout = true;
                    libDB[book].dueDate = getDueDate()
                }
            }
        },
        return: {
            enumerable: true,
            writable: false,
            value: function(book) {
                libDB[book].dueDate = "";
                let foundIt = null;
                this.bookShelf.forEach((element, idx) => {
                    if (libDB[book].title === element){
                        foundIt = idx;
                    }
                    this.bookShelf.splice(idx, 1)
                });
                libDB[book].checkedout = false;
            }
        }
    }),
    raf : Object.create(null, {
        favGenres: {
            enumerable: true,
            writable: false,
            value: []
        },
        bookShelf: {
            enumerable: true,
            writable: true,
            value: []
        },
        firstName: {
            enumerable: true,
            writable: false,
            value: "Raf"
        },
        lastName: {
            enumerable: true,
            writable: false,
            value: "Cevallos"
        },
        address: {
            enumerable: true,
            writable: false,
            value: "742 Evergreen Terrace"
        },
        lcNumber: {
            enumerable: true,
            writable: true,
            value: ""
        },
        checkout: {
            enumerable: true,
            writable: false,
            value: function(book) {
                if (libDB[book].checkedout === false){
                    this.bookShelf.push(libDB[book]);
                    libDB[book].checkedout = true;
                    libDB[book].dueDate = getDueDate()
                }
            }
        },
        return: {
            enumerable: true,
            writable: false,
            value: function(book) {
                libDB[book].dueDate = "";
                let foundIt = null;
                this.bookShelf.forEach((element, idx) => {
                    if (libDB[book].title === element){
                        foundIt = idx;
                    }
                    this.bookShelf.splice(idx, 1)
                });
                libDB[book].checkedout = false;
            }
        }
    }),
}

