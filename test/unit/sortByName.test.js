const sorting = require("../../app");

// describe("books names test suite", () => {

//     it("books name to be sorted in ascending order", () => {

//         expect(
//             sorting.sortByName([
//                 "Вечера",
//                 "Отцы и дети",
//                 "Квартет",
//                 "Гостья из будущего"
//             ])
//         ).toEqual([
//             "Вечера",
//             "Гостья из будущего",
//             "Квартет",
//             "Отцы и дети"
//         ]);

//     });
// });

describe("books names test suite", () => {

    it("books name to be sorted in ascending order", () => {

        const input = [ //входные данные
            "Вечера",
                "Отцы и дети",
                "Квартет",
                "Гостья из будущего"
        ];

        const expected = [ // ожидаемые данные на выходе
            "Вечера",
            "Гостья из будущего",
            "Квартет",
            "Отцы и дети"
        ];

        const output = sorting.sortByName(input); // актуальные данные на выходе

        expect(output).toEqual(expected);


    });
});

describe("books names test suite", () => {

    it("Throws exception if test without params", () => {

        expect(() => sorting.sortByName()).toThrow(TypeError);
    });
});