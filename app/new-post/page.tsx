import AddPostForm from "../components/AddPostForm";

const NewPostPage = () => {
  return (
    <div className="container p-4 mx-auto pt-24">
      <h1 className="text-2xl font-bold">Yeni Blog Yazısı Ekle</h1>
      <AddPostForm />
    </div>
  );
};

export default NewPostPage;
