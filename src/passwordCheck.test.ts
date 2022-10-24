import { dogpass } from "./passwordCheck";

describe("Testing validity of password", () => {
    test("Testing the validity function", () => {
        expect(dogpass("Thisisvalid123*!")).toBe(true);
        expect(dogpass("Tisnotvalid1423*!")).toBe(false);
        expect(dogpass("*!thIsinvalid123")).toBe(false);
        expect(dogpass("123thisinValid*!")).toBe(false);
        expect(dogpass("this*is!valid123")).toBe(true);
        expect(dogpass("inValid123!*")).toBe(false);
        expect(dogpass("thisisiNvalid123")).toBe(false);
        expect(dogpass("tHissisinvalid*!")).toBe(false);
        expect(dogpass("thissisjustcHara")).toBe(false);
    });
});
