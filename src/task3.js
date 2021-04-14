// sharleen and ole task 3


// //Task_3: Given an object containing counts of both likes and dislikes of a facebook post, return a number of count for either likes or dislikes should be displayed. This is calculated by subtracting the number of dislikes from likes. 

// Ex:  getCount({ likes: 13, dislikes: 0 }) -> 13 

// Ex:  getCount({ likes: 2, dislikes: 23 }) -> -21 

// Ex:  getCount({ likes: 100, dislikes: 100 }) -> 0 

// Note: The argument gets passed in the form of an object 

// Note: This object get assigned to the variable name "counts" 

// Note: the function body want something to operate on , which is going to be the properties of the object "counts" , so you access t 

function getCount(obj) {
    let likes = obj.likes
    //console.log(likes) //44
    let dislikes = obj.dislikes

    likes -= dislikes
    //console.log(likes)  //23
    return likes
}

console.log(
    getCount({
        likes: 44,

        dislikes: 21
    })
)

console.log(
    getCount({
        likes: 100,
        dislikes: 100
    })

)

console.log(
    getCount({
        likes: 13,
        dislikes: 0
    })
)

console.log(
    getCount({

        likes: 2,
        dislikes: 23
    })


)
