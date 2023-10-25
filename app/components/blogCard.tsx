import Link from 'next/link'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Style from '../../styles/BlogsCard.module.scss'

export default function RecipeCard(props: any) {
    const { title, description, image } = props.recipe.fields

    return (
        <div className={Style.blogItem}>
            <a href="#">
                <div className={Style.biImg}><Image
                    src={`https:${image.fields.file.url}`}
                    width={image.fields.file.details.image.width}
                    height={image.fields.file.details.image.height}
                    alt='image'
                /></div>
                <div className={Style.biTitle}>{title}</div>
                <div className={Style.biContent}>{documentToReactComponents(description)}</div>
            </a>
        </div>
    )
}