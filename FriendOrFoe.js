// Filter a list of strings and retuns only names that have 4 letters in it
// Tests:
// ["Ryan", "Kieran", "Mark"] => ["Ryan", "Mark"])
// ["Ryan", "Jimmy", "123", "4", "Cool Man"] => ["Ryan"])
// ["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"] => ["Jimm", "Cari", "aret"])
// ["Love", "Your", "Face", "1"] => ["Love", "Your", "Face"])

function friend(friends) {
    return (friendList = friends.filter(friend =>
        friend.length === 4))
}
