import React from 'react'

const Accordion = ({ post }) => {
    console.log(post);
    return (
        <div>
            {post.title}
            {post.desc}

        </div>
    )
}

export default Accordion