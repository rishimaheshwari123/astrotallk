import { Link } from "react-router-dom";

export default function CollaborationCard({
  title,
  icon,
  description,
  additionalText,
  actionText,
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative pb-20 h-full border border-gray-100 hover:border-orange-200 transition-colors">
      <div className="flex justify-center mb-6">
        <div className="p-3 bg-orange-100 rounded-full">{icon}</div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
        {title}
      </h3>

      <p className="text-gray-700 mb-4 text-center">{description}</p>

      {additionalText && (
        <p className="text-gray-600 mb-4 text-center text-sm">
          {additionalText}
        </p>
      )}

      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <Link
          to="#collaborate-form"
          className="inline-flex items-center justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 transition-colors"
        >
          {actionText}
        </Link>
      </div>
    </div>
  );
}
