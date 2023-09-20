let getNameAxios = async (idPost) =>{
    try {
        let resPost = await axios (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        console.log(resPost.data.title);

        let resUser = await axios (`https://jsonplaceholder.typicode.com/users/${post.userId}`)
    } catch (error) {
        console.log(error);
    }
}

getNameAxios(8)