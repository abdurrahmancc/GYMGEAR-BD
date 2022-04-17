import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../../Shared/Loading/Loading";
import img from "../../../images/rahman.jpg";

const About = () => {
  const [user, loading, hooksError] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container">
      <div className="d-flex justify-content-center flex-column align-items-center">
        <img className="w-25" src={img} alt="" />
        <h4>Abdur Rahman</h4>
        <p>
          আমার সপ্ন হলো এই দীর্ঘ ৫ মাস কে কাজে লাগিয়ে একটি কম্পানি তেরী করা । যাতে এখান থেকে আমার
          মতো আর ১০ জন কর্মসংস্থান গড়ে তুলা। এবং আমার গ্রামের মানুষের জন্য কিছু করা।{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
