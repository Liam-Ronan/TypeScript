//* Intersection type

interface HasID {
	id: number;
}

const addIdToValue = <T>(val: T): T & HasID => {
	const id = Math.random();

	return { ...val, id };
};

interface BlogPost {
	title: string;
	thumbsUp: number;
}

const blogPost = addIdToValue<BlogPost>({ title: "Jam Rules", thumbsUp: 54 });
console.log(blogPost.id, blogPost.thumbsUp, blogPost.title);
