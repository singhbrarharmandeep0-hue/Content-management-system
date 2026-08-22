import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "../styles/analytics.css";

function Analytics({ posts }) {
    useGSAP(() => {

  gsap.from(".analytics-chart", {
    x: -80,
    opacity: 0,
    duration: 1
  });

  gsap.from(".info-card", {
    x: 80,
    opacity: 0,
    stagger: 0.2,
    duration: 1
  });

}, []);

    const data = [

        {
            name: "Posts",
            total: posts.length
        },

        {
            name: "Categories",
            total: new Set(
                posts.map(post => post.category)
            ).size
        },

        {
            name: "Authors",
            total: new Set(
                posts.map(post => post.author)
            ).size
        },
         {
        name: "Images",
        total: posts.filter(post => post.image).length
    }

    ];

    const topCategory = (() => {

    const counts = {};

    posts.forEach(post => {
        counts[post.category] = (counts[post.category] || 0) + 1;
    });

    return Object.entries(counts).sort((a,b)=>b[1]-a[1])[0];

})();

const topAuthor = (() => {

    const counts = {};

    posts.forEach(post => {
        counts[post.author] = (counts[post.author] || 0) + 1;
    });

    return Object.entries(counts).sort((a,b)=>b[1]-a[1])[0];

})();

    return (

<div className="analytics">

    <div className="analytics-header">

        <h2>Dashboard Analytics</h2>

        <p>
            Overview of your CMS content.
        </p>

    </div>

    <div className="analytics-grid">

        <div className="analytics-chart">

            <ResponsiveContainer
                width="100%"
                height={320}
            >

                <BarChart data={data}>

                    <XAxis dataKey="name"/>

                    <YAxis/>

                    <Tooltip/>

                    <Bar
                        dataKey="total"
                        fill="#3b82f6"
                        radius={[8,8,0,0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

        <div className="analytics-info">

            <div className="info-card">

                <h3>Top Category</h3>

                <h2>{topCategory ? topCategory[0] : "-"}</h2>

                <p>{topCategory ? topCategory[1] : 0} Posts</p>

            </div>

            <div className="info-card">

                <h3>Top Author</h3>

                <h2>{topAuthor ? topAuthor[0] : "-"}</h2>

                <p>{topAuthor ? topAuthor[1] : 0} Posts</p>

            </div>

            <div className="info-card">

                <h3>Total Images</h3>

                <h2>{posts.filter(post=>post.image).length}</h2>

                <p>Uploaded</p>

            </div>

        </div>

    </div>

</div>

);
}

export default Analytics;