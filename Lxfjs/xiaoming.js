var xiaoming = {
    name: "小明",
    brith: 1990,
    age: function() {
        var res = new Date().getFullYear();
        return res - this.brith;
    }
}
alert(xiaoming.age());