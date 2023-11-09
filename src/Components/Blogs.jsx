import img1 from '../assets/london.jpeg'
import img2 from '../assets/maldives.jpg'
import img3 from '../assets/paris.jpg'
import img4 from '../assets/dubai.jpg'
const Blogs = () => {
    return (
        <div>
            <section className="py-6 sm:py-12 bg-gray-800 text-gray-100">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Reading a blog is a journey of discovery and a pathway to deeper knowledge. </h2>
			<p className="font-serif text-sm text-gray-400">When you delve into a well-written blog, you open the door to a world of insights, tips, and expertise. Each article offers a chance to learn more, broaden your horizons, and gain new perspectives on a wide range of subjects.</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col bg-gray-900">
				<a rel="noopener noreferrer" href="https://www.travelandleisure.com/travel-guide/london#:~:text=London%20is%20a%20beautiful%20city,over%20for%20your%20next%20visit." aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src={img1} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="https://www.travelandleisure.com/travel-guide/london#:~:text=London%20is%20a%20beautiful%20city,over%20for%20your%20next%20visit." aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="https://www.travelandleisure.com/travel-guide/london#:~:text=London%20is%20a%20beautiful%20city,over%20for%20your%20next%20visit." className="text-xs tracki uppercase hover:underline text-violet-400">London</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leadi">London is the best place for tour.It's under United Kingdom</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>June 1, 2020</span>
						<span>2.1K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src={img3}/>
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="https://worldinparis.com/paris-travel-guide" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline text-violet-400">Paris,France</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leadi">Paris is the best place for tour.It's the capital of france</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>June 2, 2020</span>
						<span>2.2K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src={img4} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="https://charlieswanderings.com/turkey-travel-guides/" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="https://charlieswanderings.com/turkey-travel-guides/" className="text-xs tracki uppercase hover:underline text-violet-400">Turkey</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leadi">Turkey is the best place for tour.</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>June 3, 2020</span>
						<span>2.3K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src={img2} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="https://handluggageonly.co.uk/the-complete-guide-to-visiting-the-maldives/" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="https://handluggageonly.co.uk/the-complete-guide-to-visiting-the-maldives/" className="text-xs tracki uppercase hover:underline text-violet-400">Maldives</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leadi">Maldives is the best place for tour.</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>June 4, 2020</span>
						<span>2.4K views</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
        </div>
    );
};

export default Blogs;