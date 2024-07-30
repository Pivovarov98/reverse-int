function reverse(n) {
    let number = n > 0 ? n : -n
    return number.toString().split('').reverse().join('')
}

module.exports = reverse