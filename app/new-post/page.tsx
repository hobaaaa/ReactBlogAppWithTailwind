import AddPostForm from "../components/AddPostForm";

const NewPostPage = () => {
  return (
    <div className="container  text-center pt-[6rem] mx-auto">
      <div className="mx-2 md:mx-0 my-2 bg-gray-200 p-4 rounded ">
        <h1 className="text-3xl font-bold">Yeni Blog</h1>
        <AddPostForm />
      </div>
    </div>
  );
};

export default NewPostPage;
