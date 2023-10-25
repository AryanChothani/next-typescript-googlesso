"use client"
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import style from '../../styles/login.module.scss'


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
                        <img className={style.googleIcon} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                    </div>
                    <p className={style.btnText} onClick={() => signIn()}><b >Sign in with google</b></p>
                </div>
            </>
        )
    }
}