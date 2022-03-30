import React from 'react'

function PostDetails({post}) {
    console.log(post)
  return (
    <div>

    </div>
  )
}

export default PostDetails


// export async function getStaticProps(context) {

//     const res = await fetch('https://crypto.justriskit.com/graphql', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             query: `
//                 query SinglePost($id: ID!, $idType: PostIdType!) {
//                      author {
//             node {
//         avatar {
//           url
//         }
//         comments {
//           nodes {
//             content
//             approved
//             author {
//               node {
//                 name
//                 avatar {
//                   url
//                 }
//                 url
//               }
//             }
//           }
//         }
//         description
//       }
//     }
//     categories {
//       nodes {
//         slug
//         name
//       }
//     }
//     featuredImage {
//       node {
//         sourceUrl
//       }
//     }
//     tags {
//       nodes {
//         name
//         uri
//       }
//     }
//     title
//     content
//   }`,
//             variables: {
//                 id: context.params.slug,
//                 idType: 'SLUG'
//             }
//         })
//     })

//     const json = await res.json()
//     return {
//         props: {
//             post: json.data.post,
//         },
//     }

// }


// export async function getStaticPaths(){
//     const res = await fetch('https://crypto.justriskit.com/graphql', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             query: `
//             query AllPostsQuery {
//                 posts {
//                     nodes {
//                         slug        
//                     }
//                 }
//             }
//         `})
//     })

//     const json = await res.json()
//     const posts = json.data.posts.nodes;

//     const paths = posts.map((post) => ({
//         params: { slug: post.slug },
//     }))

//     return { paths, fallback: false }
// }


export async function getStaticProps(context) {

    const res = await fetch('https://crypto.justriskit.com/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                    query SinglePost($id: ID!, $idType: PostIdType!) {
                        post(id: $id, idType: $idType) {
                            title
                            slug
                            content
                            featuredImage {
                                node {
                                    sourceUrl
                                }
                            }
                            author {
                                node {
                                    avatar {
                                        url
                                         }
                                    name
                                    description
                                     }
                                    }
                            categories {
                                     nodes {
                                       slug
                                       name
                                     }
                                        }
                            tags {
                                     nodes {
                                       name
                                       uri
                                     }
                                 }
                               comments {
                                     nodes {
                                       approved
                                       content
                                       author {
                                         node {
                                           avatar {
                                             url
                                           }
                                           name
                                           url
                                         }
                                       }
                                     }
                                   }


                        }
                    }
                `,
                variables: {
                    id: context.params.slug,
                    idType: 'SLUG'
                }
            })
        })

    const json = await res.json()

    return {
        props: {
            post: json.data.post,
        },
    }

}

export async function getStaticPaths() {

    const res = await fetch('https://crypto.justriskit.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query AllPostsQuery {
                posts {
                    nodes {
                        slug
                        content
                        title
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            }
        `})
    })

    const json = await res.json()
    const posts = json.data.posts.nodes;

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: false }

}


//

// author {
//     node {
//       avatar {
//         url
//       }
//       name
//       description
//     }
//   }
//   categories {
//     nodes {
//       slug
//       name
//     }
//   }
//   featuredImage {
//     node {
//       sourceUrl
//     }
//   }
//   tags {
//     nodes {
//       name
//       uri
//     }
//   }
//   title
//   content
//   comments {
//     nodes {
//       approved
//       content
//       author {
//         node {
//           avatar {
//             url
//           }
//           name
//           url
//         }
//       }
//     }
//   }

