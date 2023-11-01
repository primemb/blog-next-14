const HomePage = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_URL + "/api/posts");
  const posts = await res.json();

  return <div className="flex flex-col h-full"></div>;
};

export default HomePage;
