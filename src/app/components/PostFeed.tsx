const PostFeed: React.FC = () => {
  // Simulating an error
  // throw new Error("Failed to load post feed");
  return (
    <div className="border border-gray-300 p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Post Feed</h2>
      <p>Loading posts...</p>
    </div>
  );
};

export default PostFeed;
