"use strict";
//* Intersection type
const addIdToValue = (val) => {
    const id = Math.random();
    return Object.assign(Object.assign({}, val), { id });
};
const blogPost = addIdToValue({ title: 'Jam Rules', thumbsUp: 54 });
console.log(blogPost.id, blogPost.thumbsUp, blogPost.title);
