import { Review } from "@prisma/client";
import React from "react";
import { calculateReviewRatingAverage } from "../../../../utils/caclulateReviewRatingAverage";
import Stars from "../../../components/Stars";

export default function Ratings({ reviews }: { reviews: Review[] }) {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Stars reviews={reviews} />
        <p className="text-reg ml-3">
          {calculateReviewRatingAverage(reviews).toFixed(1)}
        </p>
      </div>
      <div>
        <p className="text-reg ml-4">
          {reviews.length} review{reviews.length === 1 ? "" : "s"}
        </p>
      </div>
    </div>
  );
}
