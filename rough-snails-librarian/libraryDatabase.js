const libDB = {
    book1: Object.create(null, {
        name: {
            value: "Harry Potter and the Sorcerer's Stone",
            enumerable: true
        },
        author: {
            value: "J. K. Rowling",
            enumerable: true
        } ,
        genre:{
            value: ["Fantasy", "Fiction", "Young Adult", "Mystery", "Thriller"] ,
            enumerable: true
        } ,
        ISBN: {
            value: "9780545010221",
            enumerable: true
        },
        checkedout: {
            value: false,
            writable: true,
            enumerable: true
        },
        dueDate: {
            value: "",
            enumerable: true,
            writable: true
        }
    }),
    book2: Object.create(null, {
        name: {
            value: "The Hobbit",
            enumerable: true
        },
        author: {
            value: "J. R. R. Tolkien",
            enumerable: true
        } ,
        genre:{
            value: ["Fantasy", "Fiction"] ,
            enumerable: true
        } ,
        ISBN: {
            value: "9780547928227",
            enumerable: true
        },
        checkedout: {
            value: false,
            writable: true,
            enumerable: true
        },
        dueDate: {
            value: "",
            enumerable: true,
            writable: true
        }
    }),
    book3: Object.create(null, {
        name: {
            value: "Raindbow Fish",
            enumerable: true
        },
        author: {
            value: "Marcus Pfister",
            enumerable: true
        } ,
        genre:{
            value: ["Children's literature"] ,
            enumerable: true
        } ,
        ISBN: {
            value: "‎9781558580091",
            enumerable: true
        },
        checkedout: {
            value: false,
            writable: true,
            enumerable: true
        },
        dueDate: {
            value: "",
            enumerable: true,
            writable: true
        }
    }),
    book4: Object.create(null, {
        name: {
            value: "Ready Player One",
            enumerable: true
        },
        author: {
            value: "Ernest Cline",
            enumerable: true
        } ,
        genre:{
            value: ["Science Fiction", "Fantasy", "Young Adult", "Thriller"] ,
            enumerable: true
        } ,
        ISBN: {
            value: "3442380308",
            enumerable: true
        },
        checkedout: {
            value: false,
            writable: true,
            enumerable: true
        },
        dueDate: {
            value: "",
            enumerable: true,
            writable: true
        }
    }),
    book5: Object.create(null, {
        name: {
            value: "The Hitchhiker's Guide to the Galaxy",
            enumerable: true
        },
        author: {
            value: "Douglas Adams",
            enumerable: true
        } ,
        genre:{
            value: ["Science Fiction", "Fantasy", "Young Adult", "Thriller", "Comics"] ,
            enumerable: true
        } ,
        ISBN: {
            value: "9780345391803",
            enumerable: true
        },
        checkedout: {
            value: false,
            writable: true,
            enumerable: true
        },
        dueDate: {
            value: "",
            enumerable: true,
            writable: true
        }
    }),
    book6: Object.create(null, {
        name: {
            value: "1984",
            enumerable: true
        },
        author: {
            value: "George Orwell",
            enumerable: true
        } ,
        genre:{
            value: ["Science Fiction", "Political Fiction", "Futuristic", "Fiction"] ,
            enumerable: true
        } ,
        ISBN: {
            value: "0451524934",
            enumerable: true
        },
        checkedout: {
            value: false,
            writable: true,
            enumerable: true
        },
        dueDate: {
            value: "",
            enumerable: true,
            writable: true
        }
    }),
    book7: Object.create(null, {
        name: {
            value: "Fahrenheit 451",
            enumerable: true
        },
        author: {
            value: "Ray Bradbury",
            enumerable: true
        } ,
        genre:{
            value: ["Science Fiction", "Political Fiction", "Fiction"] ,
            enumerable: true
        } ,
        ISBN: {
            value: "9781451673319",
            enumerable: true
        },
        checkedout: {
            value: false,
            writable: true,
            enumerable: true
        },
        dueDate: {
            value: "",
            enumerable: true,
            writable: true
        }
    }),
    book8: Object.create(null, {
        name: {
            value: "A Wrinkle in Time",
            enumerable: true
        },
        author: {
            value: "Madeleine L'Engle",
            enumerable: true
        } ,
        genre:{
            value: ["Science Fiction", "Young Adult", "Fiction"] ,
            enumerable: true
        } ,
        ISBN: {
            value: "9780312367541",
            enumerable: true
        },
        checkedout: {
            value: false,
            writable: true,
            enumerable: true
        },
        dueDate: {
            value: "",
            enumerable: true,
            writable: true
        }
    }),
    book9: Object.create(null, {
        name: {
            value: "The Secret Life of Bees",
            enumerable: true
        },
        author: {
            value: "Sue Monk Kidd",
            enumerable: true
        } ,
        genre:{
            value: ["Young Adult", "Fiction"] ,
            enumerable: true
        } ,
        ISBN: {
            value: "9780142001745",
            enumerable: true
        },
        checkedout: {
            value: false,
            writable: true,
            enumerable: true
        },
        dueDate: {
            value: "",
            enumerable: true,
            writable: true
        }
    }),
    book10: Object.create(null, {
        name: {
            value: "Alice's Adventures in Wonderland",
            enumerable: true
        },
        author: {
            value: "Lewis Carroll",
            enumerable: true
        } ,
        genre:{
            value: ["Children's literature", "Fiction"] ,
            enumerable: true
        } ,
        ISBN: {
            value: "9780590085038",
            enumerable: true
        },
        checkedout: {
            value: false,
            writable: true,
            enumerable: true
        },

    }),
}