import Section from "../UI/Section";
import Container from "../UI/Container";
import Hero from "./../../images/hero.webp";

const HeroSection = (props) => {
  return (
    <Section className="bg-contain bg-right bg-no-repeat" backgroundImage={Hero}>
      <Container>
        <div className="h-full container mx-auto">
          <div className="h-full flex items-start justify-center flex-col">
            <h1 className="text-4xl font-light w-6/12 mb-5 leading-15">
              Food and Grocery Delivery from <span className="font-medium">Manila’s</span> Best Restaurants and Shops
            </h1>

            <p className="font-light mb-10">
              The meals you love, delivered with care
            </p>

            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-7 py-3 border border-transparent text-base font-medium rounded-md text-white bg-theme-orange hover:bg-indigo-700"
                >
                  Get started
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-7 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-indigo-50"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
