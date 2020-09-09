for (const key in document) {
    document.write(key + ":" + document.key + "<br>")
}
for (let index = 10; index < 37; index++) {
    var text = "<span style=font-size:" + index + "px>" + `Schriftgrösse= ${index} <br>`
    document.write(text);
}