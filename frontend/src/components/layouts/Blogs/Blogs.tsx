import Card from "./Card";

const Blogs = () => {
  console.log(Array(6));

  return (
    <>
      <div className="w-full text-center py-3">
        <h1 className="text-3xl font-bold">Blogs</h1>
      </div>
      <hr className="bg-black my-3" />
      <div className="h-auto py-2 px-1 grid grid-cols-1 items-stretch xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-2">
        {[0].map((item: number) => (
          <Card key={item} />
        ))}
      </div>
    </>
  );
};

export default Blogs;
