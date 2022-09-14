import { render, screen } from "@testing-library/react";
import Reviews from "../RatingsAndReviews/Reviews";
import DisplayReview from "../RatingsAndReviews/DisplayReview";
import AddReview from "../RatingsAndReviews/AddReview";
import RatingBar from "../RatingsAndReviews/RatingBar";
import ReviewScore from "../RatingsAndReviews/ReviewScore";

it("should render Reviews component", () => {
  render(<Reviews />);
});

// it('should have a title "Ratings and Reviews"', () => {
//   render(<Reviews />);
//   const titleElement = screen.getByText(/Ratings and Reviews/i);
//   expect(titleElement).toBeInTheDocument();
// })

it("should render a review", () => {
  const review = [
    {
      review_id: 1276189,
      rating: 3,
      summary: "Just alright",
      recommend: true,
      response: null,
      body: "It does the job, but isn't perfect. If it was any more expensive I'd say don't do it.",
      date: "2022-08-25T00:00:00.000Z",
      reviewer_name: "Johnny",
      helpfulness: 9,
      photos: [],
    },
  ];
  render(
    <DisplayReview
      reviewsList={review}
      renderStarRating={(rating) => rating + rating}
    />
  );
});

it("should render an add review component", () => {
  const data = {
    product_id: "71697",
    ratings: {
      1: "5",
      2: "12",
      3: "13",
      4: "19",
      5: "39",
    },
    recommended: {
      false: "17",
      true: "71",
    },
    characteristics: {
      Fit: {
        id: 240582,
        value: "3.1298701298701299",
      },
      Length: {
        id: 240583,
        value: "3.0779220779220779",
      },
      Comfort: {
        id: 240584,
        value: "3.2987012987012987",
      },
      Quality: {
        id: 240585,
        value: "3.5263157894736842",
      },
    },
  };

  render(<AddReview metaData={data} />);
});

it("should render a rating bar based on metadata", () => {
  const metaData = {
    Size: {
      id: 240595,
      value: "2.8627450980392157",
    },
    Width: {
      id: 240596,
      value: "2.6595744680851064",
    },
    Comfort: {
      id: 240597,
      value: "3.1666666666666667",
    },
    Quality: {
      id: 240598,
      value: "3.4807692307692308",
    },
  };

  render(<RatingBar metaData={metaData} />);
});

it("should render rating info when proper data is passed in", () => {
  const data = {
      "product_id": "71701",
      "ratings": {
          "1": "8",
          "2": "16",
          "3": "23",
          "4": "14",
          "5": "25"
      },
      "recommended": {
          "false": "40",
          "true": "46"
      },
      "characteristics": {
          "Size": {
              "id": 240595,
              "value": "2.8627450980392157"
          },
          "Width": {
              "id": 240596,
              "value": "2.6595744680851064"
          },
          "Comfort": {
              "id": 240597,
              "value": "3.1666666666666667"
          },
          "Quality": {
              "id": 240598,
              "value": "3.4807692307692308"
          }
      }
  }
  render(<ReviewScore recommended={data.recommended} ratings={data.ratings} starRender={() => {}}/>);
})