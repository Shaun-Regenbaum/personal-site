export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Aorell.ttf","fonts/Jump.otf","fonts/Mekorot-Rashi.ttf","fonts/Mekorot-Vilna-Bold.ttf","fonts/Mekorot-Vilna.ttf","fonts/Steamy.otf","fonts/coolvetica.otf","fonts/nineteen.ttf","fonts/rainy.ttf","fonts/science.otf","fonts/threeam.otf"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".otf":"font/otf"},
	_: {
		entry: {"file":"_app/immutable/start-d5d12643.js","imports":["_app/immutable/start-d5d12643.js","_app/immutable/chunks/index-3ac33a4f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/daf",
				pattern: /^\/daf\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
