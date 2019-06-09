 const generate = (size) => {
    let numbers = []
console.log(numbers, size)
    while (numbers.length <= size) {
        let generatedNumber = Math.ceil(Math.random() * 60);
        if (!numbers.includes(generatedNumber)) {
            numbers.push(generatedNumber)
        }
    }

    numbers.sort((current, next) => current - next)
    return numbers
};

module.exports = generate;