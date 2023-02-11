const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey Trivial", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey partionKey length but more than MAX_PARTITION_KEY_LENGTH", () => {
  it("Returns some string when given partion key > MAX_PARTITION_KEY_LENGTH", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "48c8947f69c054a5caa934674ce8881d02bb18fb59d5a63eeaddff735b0e9801e87294783281ae49fc8287a0fd86779b27d7972d3e84f0fa0d826d7cb67dfefc48c8947f69c054a5caa934674ce8881d02bb18fb59d5a63eeaddff735b0e9801e87294783281ae49fc8287a0fd86779b27d7972d3e84f0fa0d826d7cb67dfefc48c8947f69c054a5caa934674ce8881d02bb18fb59d5a63eeaddff735b0e9801e87294783281ae49fc8287a0fd86779b27d7972d3e84f0fa0d826d7cb67dfefc"});
    expect(trivialKey.length <= 256);
  });
});


describe("deterministicPartitionKey partionKey length but less than MAX_PARTITION_KEY_LENGTH", () => {
  it("Returns some string when given partion key < MAX_PARTITION_KEY_LENGTH", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "1"});
    expect(trivialKey === "1");
  });
});

describe("deterministicPartitionKey random Event details", () => {
  it("Returns some string when given random event details", () => {
    const returnedKey = deterministicPartitionKey({ random:"1235" });
    expect(returnedKey.length <= 256);
  });
});


// describe("NoPartitionKey", () => {
//   it("Returns some string when no partition key present", () => {
//     const trivialKey = deterministicPartitionKey({ random:"1235"});
//     expect(trivialKey.length <= 256);
//   });
// });