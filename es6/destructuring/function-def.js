function compile(post) {
    return "<div>" + post.content + "</div>" + "<div>" + post.tags + "</div>"
}

var compile2 = ({content, tags}) => {
    return "<div>" + content + "</div>" + "<div>" + tags + "</div>"
}

console.log(compile2({
    content: "awesome blog post",
    tags: "blogging; copywriting; vlogging"
}))