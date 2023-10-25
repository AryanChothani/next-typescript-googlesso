"use client"
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import style from '../../styles/login.module.scss'
import Image from "next/image";


export default function Login() {

    const { data: session } = useSession();
    const router = useRouter();

    if (session) {
        router.push("/dashboard");
    } else {
        return (
            <>
                <div className={style.googleBtn}>
                    <div className={style.googleIconWrapper}>
                            <Image
                                className={style.googleIcon}
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                width={100}
                                height={100}
                                alt="Picture of the google"
                            />
                    </div>
                    <p className={style.btnText} onClick={() => signIn()}><b >Sign in with google</b></p>
                </div>
            </>
        )
    }
}