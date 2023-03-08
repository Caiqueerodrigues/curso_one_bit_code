function PhoneNumber (numeroTelefone) {
    const fixedString = numeroTelefone.replace(/[\sa-zA-Z]/g, "")
    this.contryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
    this.number = fixedString.match(/(?<=\)).+/)[0]
}

console.log(new PhoneNumber(`+55 (18) 99715-2961`))
console.log(new PhoneNumber(`+1 (999) 99715-2961`))