function calcPageHeight(doc) {
    var height = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight)
    return height-200
}
window.onload = function() {
    var height = calcPageHeight(document)
    parent.document.getElementById('content').style.height = height + 'px'
}
