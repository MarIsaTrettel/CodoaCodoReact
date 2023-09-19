let getNameAsync = async (idPost) => {
    try {
        let resPost = await fetch (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        let post = await resPost.json();
        console.log(post.title);

    }catch (error) {
        console.log(error);
    }
}

getNameAsync(14)