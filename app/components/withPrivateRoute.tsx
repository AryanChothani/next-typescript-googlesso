import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NextComponentType } from "next";
import { useSession } from "next-auth/react";


const authRoute = (Component: NextComponentType) => {
    return (props: any) => {
        const router = useRouter();
        const [user, setUser] = useState<any>(null);
        const [authenticated, setAuthenticated] = useState(false);
        const { data: session } = useSession();

        useEffect(() => {
            const checkToken = async () => {
                if (!session?.user) {
                    router.replace("/");
                } else {
                    setUser(session?.user);
                    setAuthenticated(true);
                }
            }
            checkToken();
        }, []);

        if (authenticated) {
            return <Component {...props} user={user} />;
        } else {
            return null;
        }
    }
};
export default authRoute;