import NavBar from './crossoutstyle/NavBar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            <main className="container mx-auto p-4">{children}</main>
        </>
    )
}
