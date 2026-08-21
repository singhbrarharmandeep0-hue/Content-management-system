import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Analytics from "../components/Analytics";

function AnalyticsPage({ posts }) {
    return (
        <>
            <Navbar />

            <div className="container">

                <Sidebar />

                <main className="content">

                    <Analytics posts={posts} />

                </main>

            </div>
        </>
    );
}

export default AnalyticsPage;