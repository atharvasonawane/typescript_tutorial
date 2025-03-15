// Defining new type by existing types
// Not much necessary

type cardNumber = {
    cardNumber: String
}
type cardDate = {
    cardDate?: String
}

type cardDetails = cardNumber & cardDate & {
    cardCvv: String
}

let card : cardDetails = {
    cardNumber: "1234",
    cardCvv: "1234"
}

console.log(card);