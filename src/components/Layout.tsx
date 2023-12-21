import NavBar from '@components/NavBar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            <main className="relative container mx-auto p-4">{children}</main>
        </>
    )
}
