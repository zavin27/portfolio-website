require("babel-register")({
	presets: ["es2015", "react"]
});

const router = require("./Routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
	return (
		new Sitemap(router)
			.build("https://zavin27.github.io/portfolio-website/")
			.save("./public/sitemap.xml")
	);
}

generateSitemap();
