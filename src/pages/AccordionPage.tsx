import Accordion from "../components/Accordion/Accordion";

const data = [
  {
    title: "Question 1",
    body: "Lorem ipsum dolor sit amet consectetur adipiscing elit, nibh rutrum dapibus suscipit sodales egestas, praesent class nulla non convallis malesuada. Lorem ipsum dolor sit amet consectetur adipiscing elit, nibh rutrum dapibus suscipit sodales egestas, praesent class nulla non convallis malesuada. Lorem ipsum dolor sit amet consectetur adipiscing elit, nibh rutrum dapibus suscipit sodales egestas, praesent class nulla non convallis malesuada. Lorem ipsum dolor sit amet consectetur adipiscing elit, nibh rutrum dapibus suscipit sodales egestas, praesent class nulla non convallis malesuada.",
  },
  {
    title: "Question 2",
    body: "Lorem ipsum dolor sit amet consectetur adipiscing elit, nibh rutrum dapibus suscipit sodales egestas, praesent class nulla non convallis malesuada. Lorem ipsum dolor sit amet consectetur adipiscing elit, nibh rutrum dapibus suscipit sodales egestas, praesent class nulla non convallis malesuada. Lorem ipsum dolor sit amet consectetur adipiscing elit, nibh rutrum dapibus suscipit sodales egestas, praesent class nulla non convallis malesuada. Lorem ipsum dolor sit amet consectetur adipiscing elit, nibh rutrum dapibus suscipit sodales egestas, praesent class nulla non convallis malesuada.",
  },
  {
    title: "Question 3",
    body: "Lorem ipsum dolor sit amet consectetur adipiscing elit, nibh rutrum dapibus suscipit sodales egestas, praesent class nulla non convallis malesuada. Lorem ipsum dolor sit amet consectetur adipiscing elit, nibh rutrum dapibus suscipit sodales egestas, praesent class nulla non convallis malesuada. Lorem ipsum dolor sit amet consectetur adipiscing elit, nibh rutrum dapibus suscipit sodales egestas, praesent class nulla non convallis malesuada. Lorem ipsum dolor sit amet consectetur adipiscing elit, nibh rutrum dapibus suscipit sodales egestas, praesent class nulla non convallis malesuada.",
  },
];

function AccordionPage() {
  return (
    <div>
      <Accordion sections={data} />
    </div>
  );
}

export default AccordionPage;
