const data = ["a", "b", "c"]

function permutation(arr) {
    if(arr.length===0) return [[]]

    const first = arr.shift()
    const rest = arr

    const withoutFirst = permutation(rest)

    const permutations = []
    withoutFirst.forEach(el=>{
        for (let i = 0; i <= el.length; i++) {
            const elWithFirst = [...el.slice(0, i),first,...el.slice(i)]
            permutations.push(elWithFirst)
        }
    }) 

    return permutations
}
// driver code
console.log(permutation(data))
