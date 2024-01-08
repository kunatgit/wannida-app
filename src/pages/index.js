const Home = () => {
    // ไม่ต้องมีการ render อะไรก็ได้ เนื่องจากจะมีการ redirect ทันที
    return null;
};

export const getServerSideProps = async ({ res }) => {
    // ทำการ redirect ไปที่ '/calculate'
    res.writeHead(302, {
        Location: "/menu",
    });
    res.end();

    return {
        props: {}, // ต้อง return อะไรก็ได้เพราะไม่มีการ render ใน Home component
    };
};

export default Home;
