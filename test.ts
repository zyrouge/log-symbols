import stripAnsi from "strip-ansi";
import logSymbols from "./dist";

for (const [key, value] of Object.entries(logSymbols)) {
    console.log(value, key);
}

console.log("");

if (
    !(
        stripAnsi(logSymbols.success) === "✔" ||
        stripAnsi(logSymbols.success) === "√"
    )
) {
    throw new Error();
}
