import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div className="w-full flex flex-col justify-between space-y-20">
                {children}
            </div>
            <Footer />
        </>
    )
}
