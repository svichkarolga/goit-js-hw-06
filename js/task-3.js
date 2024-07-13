class StringBuilder{
    #value;
 constructor(params) {
        this.#value = params;
    }

    getValue() {
        return this.#value;
    }
    padEnd(str) {
        // str.padEnd(this.#value.length, [this.#value]);
        const newValue = this.#value + str;
        this.#value = newValue;
        return this.#value;
    }
    padStart(str) {
        const newValue = str + this.#value;
        this.#value = newValue;
        return this.#value;
    }
    padBoth(str) {
        const newValue = str + this.#value + str;
        this.#value = newValue;
        return this.#value;
    }
}




const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
