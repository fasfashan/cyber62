import React from "react";

import "./App.css";
import Header from "./components/Header";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import RunningText from "./components/RunningText";
import Carousel from "./components/Carousel";
import WorkshopCard from "./components/WorkshopCard";
import CommunityCard from "./components/CommunityCard";
import CommunityCarousel from "./components/CommunityCarousel";
import Footer from "./components/Footer";
const latestWorkshops = [
  {
    id: 1,
    title: "Hands-On Workshop: Building Secure Systems from Scratch",
    image: "event-1.png",
    startDate: "28 Mar",
    endDate: "30 Mar",
    year: "2025",
    price: "IDR 350,000",
    location: "Jakarta, Indonesia (Exact venue TBA)",
    type: "technology",
  },
  {
    id: 2,
    title: "Cyber Security Workshop: Mastering Penetration Testing",
    image: "event-1.png",
    startDate: "28 Mar",
    endDate: "30 Mar",
    year: "2025",
    price: "IDR 350,000",
    location: "Jakarta, Indonesia (Exact venue TBA)",
    type: "security",
  },
  {
    id: 3,
    title: "Cyber Defense Workshop",
    image: "event-1.png",
    startDate: "28 Mar",
    endDate: "30 Mar",
    year: "2025",
    price: "IDR 350,000",
    location: "Jakarta, Indonesia (Exact venue TBA)",
    type: "defense",
  },
];

const upcomingWorkshops = [
  {
    id: 1,
    title: "Hands-On Workshop: Building Secure Systems from Scratch",
    image: "event-1.png",
    startDate: "28 Mar",
    endDate: "30 Mar",
    year: "2025",
    price: "IDR 350,000",
    location: "Jakarta, Indonesia (Exact venue TBA)",
    type: "technology",
  },
  {
    id: 2,
    title: "Cyber Security Workshop: Mastering Penetration Testing",
    image: "event-1.png",
    startDate: "28 Mar",
    endDate: "30 Mar",
    year: "2025",
    price: "IDR 350,000",
    location: "Jakarta, Indonesia (Exact venue TBA)",
    type: "security",
  },
  {
    id: 3,
    title: "Cyber Defense Workshop",
    image: "event-1.png",
    startDate: "28 Mar",
    endDate: "30 Mar",
    year: "2025",
    price: "IDR 350,000",
    location: "Jakarta, Indonesia (Exact venue TBA)",
    type: "defense",
  },

  {
    id: 4,
    title: "Advanced Network Security Workshop",
    image: "event-1.png",
    startDate: "28 Mar",
    endDate: "30 Mar",
    year: "2025",
    price: "IDR 350,000",
    location: "Jakarta, Indonesia (Exact venue TBA)",
    type: "security",
  },
  {
    id: 5,
    title: "Advanced Network Security Workshop",
    image: "event-1.png",
    startDate: "28 Mar",
    endDate: "30 Mar",
    year: "2025",
    price: "IDR 350,000",
    location: "Jakarta, Indonesia (Exact venue TBA)",
    type: "security",
  },
  {
    id: 6,
    title: "Advanced Network Security Workshop",
    image: "event-1.png",
    startDate: "28 Mar",
    endDate: "30 Mar",
    year: "2025",
    price: "IDR 350,000",
    location: "Jakarta, Indonesia (Exact venue TBA)",
    type: "security",
  },
  {
    id: 7,
    title: "Advanced Network Security Workshop",
    image: "event-1.png",
    startDate: "28 Mar",
    endDate: "30 Mar",
    year: "2025",
    price: "IDR 350,000",
    location: "Jakarta, Indonesia (Exact venue TBA)",
    type: "security",
  },
];

const happeningWorkshops = [
  {
    id: 1,
    title: "Hands-On Workshop: Building Secure Systems from Scratch",
    image: "event-1.png",
    startDate: "28 Mar",
    endDate: "30 Mar",
    year: "2025",
    price: "IDR 350,000",
    location: "Jakarta, Indonesia (Exact venue TBA)",
    type: "technology",
  },
  {
    id: 2,
    title: "Cyber Security Workshop: Mastering Penetration Testing",
    image: "event-1.png",
    startDate: "28 Mar",
    endDate: "30 Mar",
    year: "2025",
    price: "IDR 350,000",
    location: "Jakarta, Indonesia (Exact venue TBA)",
    type: "security",
  },
  {
    id: 3,
    title: "Cyber Security Workshop: Mastering Penetration Testing",
    image: "event-1.png",
    startDate: "28 Mar",
    endDate: "30 Mar",
    year: "2025",
    price: "IDR 350,000",
    location: "Jakarta, Indonesia (Exact venue TBA)",
    type: "security",
  },
];
function App() {
  return (
    <>
      <Header />
      <main className="relative max-w-6xl mx-auto min-h-screen pt-28 px-4 pb-12 bg-[url('/hero-image.png')] bg-cover bg-center bg-no-repeat text-white flex items-center">
        <div className="space-y-2 max-w-xl md:px-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight font-display">
            Stronger together in the digital age
          </h1>
          <p className="mt-4 text-lg sm:text-2xl text-lightgrey">
            Shaping the future cybersecurity together
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <button className="bg-teal flex items-center gap-1 hover:gap-3 transition-all shadow-teal shadow-xl hover:shadow-md text-darkblue w-fit px-6 py-2 rounded-full font-semibold  ">
              Join our community <ChevronRight />
            </button>
            <button
              onClick={() => (window.location.href = "#events")}
              className="w-fit bg-darkblue font-semibold hover:outline-teal hover:outline transition-all hover:text-teal text-white px-6 py-2 rounded-full"
            >
              Upcoming Events
            </button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6    left-1/2 transform -translate-x-1/2 text-grey text-sm opacity-80">
          <div className="flex flex-col items-center">
            <ChevronDown /> Scroll down
          </div>
        </div>
      </main>
      <section
        id="welcome"
        className="bg-[url('/circle-bg.png')] px-4 max-w-5xl m-auto py-40  bg-cover bg-center bg-no-repeat"
      >
        <h2 className="text-lightgrey md:text-4xl text-2xl font-display text-center max-w-5xl m-auto">
          <span className="text-teal">Cyber62</span> is an IT community that
          brings together people passionate about technology and professional
          growth. We offer a variety of IT events, workshops, and training
          sessions designed to support individuals at every stage of their
          career
        </h2>
        <div className="flex text-grey gap-1 items-center justify-center mt-8">
          <p>The path is open.</p>
          <a className="flex gap-1 items-center" href="/">
            Will you step in? <ChevronRight className="text-teal text-sm" />
          </a>
        </div>
      </section>
      <RunningText />
      <div className=" mt-40 bg-[url('/frost-bg.png')] bg-cover bg-center bg-no-repeat ">
        <div id="events" className="max-w-6xl  mx-auto py-8">
          <h2 className="text-2xl text-white font-display px-4 mb-6">
            Latest Event
          </h2>
          <Carousel
            items={latestWorkshops}
            itemsPerSlide={3}
            renderItem={(item) => (
              <WorkshopCard
                key={item.id}
                title={item.title}
                image={item.image}
                startDate={item.startDate}
                endDate={item.endDate}
                year={item.year}
                price={item.price}
                location={item.location}
                type={item.type}
              />
            )}
          />

          <h2 className="text-2xl text-white font-display px-4 mt-12 mb-6">
            Upcoming Event
          </h2>
          <Carousel
            items={upcomingWorkshops}
            itemsPerSlide={3}
            renderItem={(item) => (
              <WorkshopCard
                key={item.id}
                title={item.title}
                image={item.image}
                startDate={item.startDate}
                endDate={item.endDate}
                year={item.year}
                price={item.price}
                location={item.location}
                type={item.type}
              />
            )}
          />

          <h2 className="text-2xl text-white font-display px-4 mt-12 mb-6">
            Happening Event
          </h2>
          <Carousel
            items={happeningWorkshops}
            itemsPerSlide={3}
            renderItem={(item) => (
              <WorkshopCard
                key={item.id}
                title={item.title}
                image={item.image}
                startDate={item.startDate}
                endDate={item.endDate}
                year={item.year}
                price={item.price}
                location={item.location}
                type={item.type}
              />
            )}
          />
        </div>
      </div>

      <CommunityCarousel />
      <Footer />
      <a
        href="#header"
        className="rounded-full border border-teal p-1 fixed bottom-4 right-4 bg-darkblue text-teal cursor-pointer hover:bg-teal hover:text-darkblue transition-all"
      >
        <ChevronUp />
      </a>
    </>
  );
}

export default App;
