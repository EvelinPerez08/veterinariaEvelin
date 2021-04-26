const palabraSinAcentos = (palabra) => palabra
    .toLowerCase()
    .replace("A", ("a"))
    .replace("E", ("e"))
    .replace("I", ("i"))
    .replace("O", ("o"))
    .replace("U", ("u"))

module.exports = { palabraSinAcentos };