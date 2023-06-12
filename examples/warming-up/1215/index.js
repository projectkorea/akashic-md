var foo = {
    bar: function () {
        return this.baz;
    },
    baz: 1,
};

(function () {
    return arguments[0]();
})(foo.bar()); // undefined

(function () {
    return arguments[0];
})(foo.bar()); // 1
