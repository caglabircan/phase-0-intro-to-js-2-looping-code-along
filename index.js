// Code your solutions in this file

function writeCards(name, event) {
    const messages = []
    for (let i = 0; i < messages.length; i++) {
        messages.push(`Thank you, ${name}, for the wonderful ${event} gift!`)
    }
    return messages
}

function countDown(n) {
    let countdown = n;
    while (countdown > -1) {
        console.log(countdown)
        countdown--
    }
}