import CallList from "@/components/CallList";
import HomeBannerData from "@/components/HomeBannerData";
import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <HomeBannerData />
      </div>

      <MeetingTypeList />

      <CallList type="upcoming" />
    </section>
  );
};

export default Home;
