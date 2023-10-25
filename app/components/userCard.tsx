import { DefaultSession } from "next-auth";
import Image, { ImageLoaderProps } from "next/image";
import Style from '../../styles/userCard.module.scss'
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
// Default Session TYPE

export function UserCard({ user }: { user: DefaultSession["user"] }) {
    return (

        <div className={Style.card}>
            <Image
                src={`${user?.image}`}
                width={100}
                height={100}
                alt="Picture of the author"
            />
            <div className={Style.cardBody}>
                <h3 className={Style.cardTitle}>{user?.name}</h3>
                <p className={Style.cardText}>{user?.email}</p>
                <a href="https://example.com/profile" className={Style.cardLink}>Profile</a>
            </div>
            <a href="/signout" onClick={() => signOut()} className={Style.signoutButton}>Sign Out</a>
        </div>
    )
}