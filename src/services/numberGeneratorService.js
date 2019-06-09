exports.generate = (size = 6) => {

    let numbers = []
    while (numbers.length <= size) {
        let generatedNumber = Math.ceil(Math.random() * 60);
        if (!numbers.includes(generatedNumber)) {
            numbers.push(generatedNumber)
        }
    }

    numbers.sort((current, next) => current - next)
    return numbers
}