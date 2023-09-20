let getNameAxios = async (idPost) =>{
    try {
        let resPost = await axios (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        console.log(resPost.data.title);

        let resUser = await axios (`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
        console.log(resUser.data);
        document.write(`${resUser.data.name} escribió el post ${resPost.data.title} vive en ${resUser.data.address.city}`);
    } catch (error) {
        console.log(error);
    }
}

getNameAxios(8)