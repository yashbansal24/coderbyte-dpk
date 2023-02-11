const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

// Prototype: Object.prototype.toString.call(variable) === "[object String]"

exports.deterministicPartitionKey = function deterministicPartitionKey(event) {
  if (!event) {
    return TRIVIAL_PARTITION_KEY
  }
  
  const dataToHash = event.partitionKey ||  crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex")
  const partitionKey = typeof dataToHash === "string" ? dataToHash : JSON.stringify(dataToHash);
  const hashValue = partitionKey.length > MAX_PARTITION_KEY_LENGTH ? 
    crypto.createHash("sha3-512").update(partitionKey).digest("hex") : partitionKey
  return hashValue;
};
