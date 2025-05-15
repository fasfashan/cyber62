import React, { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ChevronDown } from "lucide-react";
const faqs = [
  {
    question:
      "I'm not confident in my English. Will I be able to understand the talks?",
    answer:
      "Absolutely! We aim to keep the sessions clear and accessible. Some talks may use Bahasa Indonesia or include bilingual slides, and our community is happy to help if anything needs clarification.",
  },
  {
    question: "I'm a student. Can I join the gathering?",
    answer:
      "Yes! Students are more than welcome. It's a great opportunity to learn, network, and explore cybersecurity with others who share the same interest.",
  },
  {
    question: "Is there a fee to attend the event?",
    answer:
      "Most of our events are free and open to the public unless stated otherwise. If there is a fee, we’ll clearly mention it in the registration details.",
  },
  {
    question: "Do I need a cybersecurity background to join?",
    answer:
      "Not at all! Our events are open to all levels — whether you’re just curious, a beginner, or already working in the field. Everyone is welcome.",
  },
  {
    question: "Will the sessions be recorded?",
    answer:
      "We’ll let attendees know in advance and provide access if recordings are available.",
  },
  {
    question: "How can I stay updated about future events?",
    answer:
      "Follow us on social media and join our community chat to get the latest news, event announcements, and opportunities.",
  },
  {
    question: "Can I volunteer or help with future events?",
    answer:
      "We’d love that! Just let us know in the community chat or through our contact form, and we’ll get in touch with more info.",
  },
  {
    question: "How do I register for the event?",
    answer:
      "Registration links are usually shared on our website, social media, and in the community chat. Just follow the link and fill out the form — it's quick and easy!",
  },
  {
    question: "Will I receive a certificate for attending?",
    answer:
      "If a certificate is available, we’ll mention it during registration or at the event itself.",
  },
  {
    question: "Can I ask questions during the sessions?",
    answer:
      "Definitely! We encourage participants to engage, ask questions, and share ideas. Most sessions include a Q&A segment or live chat.",
  },
  {
    question: "What kind of topics will be covered?",
    answer:
      "Our events cover a range of topics in cybersecurity — from ethical hacking and digital forensics to career tips and industry insights. Each event will have a detailed agenda shared in advance.",
  },
  {
    question: "Are the events online or in-person?",
    answer:
      "We host both online and in-person events. Please check the event details to see the format.",
  },
  {
    question: "Is the event suitable for beginners?",
    answer:
      "Yes! We welcome participants of all skill levels, including beginners. Our speakers aim to make their sessions informative and easy to follow.",
  },
  {
    question: "Do I need to bring anything to the event?",
    answer:
      "For in-person events, just bring yourself, your curiosity, and maybe a laptop. For online events, a stable internet connection and a quiet space are helpful.",
  },
  {
    question: "How do I join the community chat?",
    answer:
      "You can find the invitation link on our website or social media. Once you join, introduce yourself and feel free to explore the channels!",
  },
  {
    question: "Can I suggest a topic or speaker for future events?",
    answer:
      "Yes, we'd love your input! Reach out via the community chat or contact form with your ideas.",
  },
  {
    question: "How long do the events usually last?",
    answer:
      "Depending on the agenda. Full-day gatherings or workshops may be longer — we’ll always share the schedule in advance.",
  },
  {
    question: "What platform do you use for online events?",
    answer:
      "We typically use Zoom or Google Meet. The link and access details will be provided after you register.",
  },
  {
    question: "Is there a dress code for in-person events?",
    answer:
      "There’s no strict dress code — just come in something comfortable and presentable.",
  },
  {
    question: "Can I bring a friend to the event?",
    answer:
      "Of course! Just make sure they register too so we can plan accordingly.",
  },
  {
    question: "Are meals or refreshments provided during in-person events?",
    answer:
      "Yes, meals or light refreshments are usually provided depending on the event. We’ll let you know in the event details.",
  },
  {
    question: "Will there be networking opportunities?",
    answer:
      "Yes! Whether online or in-person, we always provide time and space for attendees to connect and network.",
  },
  {
    question: "Are your events accessible for people with disabilities?",
    answer:
      "We strive to make our events accessible. If you have any specific needs, please let us know in advance so we can accommodate you.",
  },
  {
    question: "Will there be hands-on activities or just talks?",
    answer:
      "Many of our events include hands-on workshops, demos, or interactive sessions in addition to talks.",
  },
  {
    question: "How can I become a speaker or mentor?",
    answer:
      "We’re always looking for passionate individuals to share their knowledge. If you're interested in speaking or mentoring, contact us through the community chat or email.",
  },
  {
    question: "Can I suggest a city or campus for your next event?",
    answer:
      "Yes! We’re always looking to expand. Just message us in the community chat — we’d love to hear your suggestions.",
  },
  {
    question: "Is there a way to give feedback after the event?",
    answer:
      "Yes, we usually share a short feedback form after the event. Your input helps us improve future experiences!",
  },
  {
    question: "Can I record the session or take screenshots?",
    answer:
      "We kindly ask that you don’t record sessions without permission. If a recording is available, we’ll share it officially after the event.",
  },
  {
    question: "Will I be able to interact with the speakers?",
    answer:
      "Yes! Most of our sessions include Q&A time, and some speakers stay around after the session to chat or answer questions.",
  },
  {
    question: "Can I share the event with my network or school?",
    answer:
      "Absolutely! We’d love for you to spread the word. Feel free to share our event links, posters, or social media posts.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16 mt-20">
        <h1 className="text-4xl font-semibold mb-10 text-center text-lightgrey font-display">
          Frequently Asked Questions
        </h1>

        <div className="grid grid-cols-1 gap-2 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-neutral-600 rounded-lg shadow-md overflow-hidden bg-darkblue"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-lg font-medium text-lightgrey hover:bg-darkblue/80 transition-colors duration-200"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
                id={`faq-header-${index}`}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={22}
                  className={`text-lightgrey transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-header-${index}`}
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight:
                    openIndex === index
                      ? contentRefs.current[index]?.scrollHeight + 24 + "px"
                      : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}
                className="px-5 text-gray-300 text-sm leading-relaxed"
              >
                <div className="py-4">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
