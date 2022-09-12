
// Sebelum
// const persons = ["si A", "si B"]

// getPerson = () => {
//     setTimeout(() => {
//         persons.forEach((person) => {
//             console.log(person)
//         })
//     }, 1000);
// }

// addPerson = (person) => {
//     setTimeout(() => {
//         persons.push(person)
//     }, 2000);
// }

// getPerson()
// addPerson("si C")


// Sesudah
const persons = ["si A", "si B"]

getPerson = () => {
    setTimeout(() => {
        persons.forEach((person) => {
            console.log(person)
        })
    }, 1000);
}

addPerson = (person) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            persons.push(person)
            res()
        }, 2000);
    })
}

init = async () => {
    await addPerson("si C")
    getPerson()
    console.log("Tidak perlu menunggu")
}

init()
