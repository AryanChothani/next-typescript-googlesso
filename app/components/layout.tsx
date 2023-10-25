import Header from '../components/header';

export default function MainLayout({ children }: any) {
    return (
        <div >
            <Header />
            <main>{children}</main>
        </div>
    );
}