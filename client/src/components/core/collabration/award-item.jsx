import { Award } from "lucide-react";

export default function AwardItem({ title }) {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg p-6 text-white text-center">
      <div className="flex justify-center mb-4">
        <Award className="h-12 w-12" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
}
