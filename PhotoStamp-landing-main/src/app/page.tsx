import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
	return (
		<main>
			<Hero />
			<WhyUs />
			<Services />
			<Product />
			<Testimonials />
			<Contact />
		</main>
	);
}
