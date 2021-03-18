import convertBytes from "./../src/scripts/libs/convertBytes";

test("There is string 'bytes' in less than 1024 bytes", function () {
    const byteUnit = 1023;
    const result = convertBytes(byteUnit);
    expect(result).toMatch(/bytes/);
});

test("There is string 'KB' in greater than or equal 1024 bytes", function () {
    const KBUnitMin = 1024;
    const result = convertBytes(KBUnitMin);
    expect(result).toMatch(/KB/);
});

test("There is string 'KB' in less than 1048575 bytes (which is near a whole KB unit)", function () {
    const KBUnitMax = 1048575;
    const result = convertBytes(KBUnitMax);
    expect(result).toMatch(/KB/);
});

test("There is string 'MB' in greater than or equal 1048576 bytes", function () {
    const MBUnit = 1048576;
    const result = convertBytes(MBUnit);
    expect(result).toMatch(/MB/);
});
