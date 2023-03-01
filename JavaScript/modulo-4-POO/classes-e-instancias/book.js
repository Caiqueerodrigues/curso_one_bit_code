class Book {
    constructor(title) {
        this.title = title
        this.published = false
    }
    pusblish(){
        this.published = true
    }
}

var eragon = new Book('eragon')
var Damian = new Book('Damian')
eragon.pusblish()

console.log(eragon)
console.log(Damian)