require("@babel/register")({
	presets: ['@babel/react', '@babel/env']
});

const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
	return (
		new Sitemap(router)
			.build("https://zavin27.github.io/portfolio-website/")
			.save("./public/sitemap.xml")
	);
}

generateSitemap();
