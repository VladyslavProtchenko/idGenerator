

function newIdGenerator(coll){
    let count = 1;
    let id ={}

    return function(){
        id[coll] = count;
        count++
        console.log(`${coll}-${id[coll]}`);
    }
}

const idGeneratorPosts = newIdGenerator('POST')
const idGeneratorComments = newIdGenerator('comments')

const p1 = idGeneratorPosts() // posts-1
const p2 = idGeneratorPosts() // posts-2
const p3 = idGeneratorPosts() // posts-3


const c1 = idGeneratorComments() // comments-1
const c2 = idGeneratorComments() // comments-2
const c3 = idGeneratorComments() // comments-3
const c4 = idGeneratorComments() // comments-3