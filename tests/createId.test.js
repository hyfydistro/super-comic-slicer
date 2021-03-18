import createId from "../src/scripts/libs/createId";

test("Should generate unique id", function() {
    const id1 = createId();
    const id2 = createId();
    expect(id1).not.toBe(id2);
});

