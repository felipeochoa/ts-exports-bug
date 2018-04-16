exports.a = {b: {c: {}}};
exports.a.b.c.d = 123;

// Replace the above statements with these to fix the failure:
// exports.a = {};
// exports.a = {b: {c: {d: 123}}};
