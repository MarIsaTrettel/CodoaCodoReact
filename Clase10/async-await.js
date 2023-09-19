let getNameAsync = async (idPost) => {
    try {
        let resPost = await fetch (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        let post = await resPost.json();
        
        let resUser = await fetch (`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        let user = await resUser.json()

        document.write (`${user.name} escribió el post ${idPost} y vive en ${user.address.city}`)
    }catch (error) {
        console.log(error);
    }
}

getNameAsync(14)