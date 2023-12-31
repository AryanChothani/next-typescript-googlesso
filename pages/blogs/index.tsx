import { useEffect } from 'react'
import RecipeCard from '../../app/components/blogCard'
import { AppDispatch, RootState } from '../../app/state/store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogs } from '../../app/state/blog.action'
import Style from '../../styles/BlogsCard.module.scss'
import { ThunkDispatch } from "@reduxjs/toolkit";

const Blogs = () => {

  const { blogs } = useSelector((state: RootState) => state.blogs)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])

  return (
    <div className={Style.blog}>
      <div className={Style.blogTitle}>
        <h1>Our Latest Blogs</h1>
      </div>
      <div className={Style.blogWrapper}>

        {blogs.map((recipe: any) => (
          <RecipeCard key={recipe.sys.id} recipe={recipe} />
        ))}
      </div>
    </div>

  )
}

export default Blogs;