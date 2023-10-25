import React from 'react';
import authRoute from '../../app/components/withPrivateRoute'
import { UserCard } from '../../app/components/userCard';

const Dashboard = ({ user }: any) => {

    return (
        <>
            <UserCard user={user} />
        </>
    )
};
export default authRoute(Dashboard);