// No-op stub for markdown-it-texmath when the package is not available
// (e.g. Debian system-packages build where node-markdown-it-texmath is not shipped).
// Math rendering is gracefully disabled — equations render as plain text.
module.exports = function texmath() {};
