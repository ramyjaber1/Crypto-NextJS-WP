import Header from '../components/Header'
import PostCard from '../components/PostCard'


export default function Home({posts}) {
  console.log(posts)
  return (
    <div>
        <Header />
        <div  className="grid grid-cols-3 gap-4">
        {posts.nodes.map(p => (
          
          <PostCard key={p.slug}  post={p} />
          ))}
          </div>
    </div>
  )
}


export async function getStaticProps() {
  const res = await fetch('https://crypto.justriskit.com/graphql',{
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      query:`query NewQuery {
        posts {
          nodes {
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
                uri
              }
            }
            categories {
              nodes {
                name
                uri
              }
            }
            title
            content
            slug
          }
        }
        tags {
          nodes {
            name
            uri
          }
        }
      
      }`
    })
  })
  const json = await res.json()
  return{
    props:{
      posts:json.data.posts,
    },
    revalidate:1,
  }
}