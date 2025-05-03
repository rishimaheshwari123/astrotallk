export default function CelebrityReview({ name, videoId }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <h3 className="text-xl font-bold text-gray-900 p-4 text-center bg-gray-50">
        {name}
      </h3>
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`${name} Review`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
