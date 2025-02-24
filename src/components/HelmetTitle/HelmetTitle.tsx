import { Helmet } from "react-helmet-async";

const HelmetTitle = ({ subTitle }) => {
  return (
    <div>
      <Helmet>
        <title>RideHub |{subTitle}</title>
      </Helmet>
    </div>
  );
};

export default HelmetTitle;
