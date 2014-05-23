///<reference path="sunbro.ts"/>
test("basic interpolation works with no escaping", function () {
    equal(Sunbro.format("hello {1} my {0}",
        {
            0: "friend",
            1: "world"
        }),
        "hello world my friend");
});

test("escaping works", function () {
    equal(Sunbro.format("hello {1} my {{0}",
        {
            0: "friend",
            1: "world"
        },
        true),
        "hello world my {0}");
});

test("escaping with custom placeholders works", function () {
    equal(Sunbro.format("hello {1} my {0}",
        {
            0: "friend",
            1: "world"
        },
        true,
        "***","^^^"),
        "hello world my friend");
});

/**
 * Easier to provide runnable example to prove this than simply tell you
 */
test("escaping is fragile :P", function () {
    equal(Sunbro.format("hello {{{♛☊♛1} my {0}",
        {
            0: "friend",
            1: "world",
            "♛☊♛1": "broken"
        },
        true),
        "hello {broken my friend");
});