import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, o as onMount, p as globals, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.969b3a36.js';
import { D as DataTableFeature } from './DataTableFeature.051cf684.js';

/* src/routes/about.svelte generated by Svelte v3.26.0 */

const { Object: Object_1 } = globals;
const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let title_value;
	let t0;
	let h1;
	let t1;
	let t2;
	let t3;
	let p0;
	let a0;
	let t4;
	let t5;
	let a1;
	let t6;
	let t7;
	let a2;
	let t8;
	let t9;
	let p1;
	let t10;
	document.title = title_value = "marco.dev - Java Release " + /*releaseNr*/ ctx[0];

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Java release ");
			t2 = text(/*releaseNr*/ ctx[0]);
			t3 = space();
			p0 = element("p");
			a0 = element("a");
			t4 = text("Release notes");
			t5 = text("\n\t-\n\t");
			a1 = element("a");
			t6 = text("Specification");
			t7 = text("\n\t-\n\t");
			a2 = element("a");
			t8 = text("JEPS");
			t9 = space();
			p1 = element("p");
			t10 = text("This is the 'about' page. There's not much here.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-128mpds\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Java release ");
			t2 = claim_text(h1_nodes, /*releaseNr*/ ctx[0]);
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			a0 = claim_element(p0_nodes, "A", { href: true, target: true });
			var a0_nodes = children(a0);
			t4 = claim_text(a0_nodes, "Release notes");
			a0_nodes.forEach(detach_dev);
			t5 = claim_text(p0_nodes, "\n\t-\n\t");
			a1 = claim_element(p0_nodes, "A", { href: true, target: true });
			var a1_nodes = children(a1);
			t6 = claim_text(a1_nodes, "Specification");
			a1_nodes.forEach(detach_dev);
			t7 = claim_text(p0_nodes, "\n\t-\n\t");
			a2 = claim_element(p0_nodes, "A", { href: true, target: true });
			var a2_nodes = children(a2);
			t8 = claim_text(a2_nodes, "JEPS");
			a2_nodes.forEach(detach_dev);
			p0_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t10 = claim_text(p1_nodes, "This is the 'about' page. There's not much here.");
			p1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 30, 0, 754);
			attr_dev(a0, "href", /*releaseNotesUrl*/ ctx[1]);
			attr_dev(a0, "target", "_blank");
			add_location(a0, file, 32, 1, 794);
			attr_dev(a1, "href", /*specificationUrl*/ ctx[2]);
			attr_dev(a1, "target", "_blank");
			add_location(a1, file, 34, 1, 860);
			attr_dev(a2, "href", /*specificationUrl*/ ctx[2]);
			attr_dev(a2, "target", "_blank");
			add_location(a2, file, 36, 1, 927);
			add_location(p0, file, 31, 0, 789);
			add_location(p1, file, 41, 0, 989);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			append_dev(h1, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, a0);
			append_dev(a0, t4);
			append_dev(p0, t5);
			append_dev(p0, a1);
			append_dev(a1, t6);
			append_dev(p0, t7);
			append_dev(p0, a2);
			append_dev(a2, t8);
			insert_dev(target, t9, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t10);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*releaseNr*/ 1 && title_value !== (title_value = "marco.dev - Java Release " + /*releaseNr*/ ctx[0])) {
				document.title = title_value;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(p1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function getKeys(data) {
	if (data.length > 0) {
		return Object.keys(data[0]);
	}

	return [];
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("About", slots, []);
	let releaseNr = 15;
	let releaseNotesUrl = `https://jdk.java.net/${releaseNr}/release-notes`;
	let specificationUrl = `https://cr.openjdk.java.net/~iris/se/${releaseNr}/latestSpec//api/index.html`;
	let jepsUrl = `https://openjdk.java.net/projects/jdk/${releaseNr}/`;
	let features = [];

	onMount(async function loadData() {
		const result = await fetch("http://localhost:8080/features/15");
		features = await result.json();
	});

	const writable_props = [];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<About> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		onMount,
		DataTableFeature,
		releaseNr,
		releaseNotesUrl,
		specificationUrl,
		jepsUrl,
		features,
		getKeys
	});

	$$self.$inject_state = $$props => {
		if ("releaseNr" in $$props) $$invalidate(0, releaseNr = $$props.releaseNr);
		if ("releaseNotesUrl" in $$props) $$invalidate(1, releaseNotesUrl = $$props.releaseNotesUrl);
		if ("specificationUrl" in $$props) $$invalidate(2, specificationUrl = $$props.specificationUrl);
		if ("jepsUrl" in $$props) jepsUrl = $$props.jepsUrl;
		if ("features" in $$props) features = $$props.features;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [releaseNr, releaseNotesUrl, specificationUrl];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuOTViMTYwYTIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWJvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7b25Nb3VudH0gZnJvbSBcInN2ZWx0ZVwiO1xuXHRpbXBvcnQgRGF0YVRhYmxlRmVhdHVyZSBmcm9tIFwiLi4vY29tcG9uZW50cy9EYXRhVGFibGVGZWF0dXJlLnN2ZWx0ZVwiO1xuXG5cdGxldCByZWxlYXNlTnIgPSAxNTtcblx0bGV0IHJlbGVhc2VOb3Rlc1VybCA9IGBodHRwczovL2pkay5qYXZhLm5ldC8ke3JlbGVhc2VOcn0vcmVsZWFzZS1ub3Rlc2A7XG5cdGxldCBzcGVjaWZpY2F0aW9uVXJsID0gYGh0dHBzOi8vY3Iub3Blbmpkay5qYXZhLm5ldC9+aXJpcy9zZS8ke3JlbGVhc2VOcn0vbGF0ZXN0U3BlYy8vYXBpL2luZGV4Lmh0bWxgXG5cdGxldCBqZXBzVXJsID0gYGh0dHBzOi8vb3Blbmpkay5qYXZhLm5ldC9wcm9qZWN0cy9qZGsvJHtyZWxlYXNlTnJ9L2A7XG5cblx0bGV0IGZlYXR1cmVzID0gW107XG5cblx0ZnVuY3Rpb24gZ2V0S2V5cyhkYXRhKSB7XG5cdFx0aWYgKGRhdGEubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKGRhdGFbMF0pO1xuXHRcdH1cblx0XHRyZXR1cm4gW11cblx0fVxuXG5cdG9uTW91bnQoXG5cdFx0XHRhc3luYyBmdW5jdGlvbiBsb2FkRGF0YSgpIHtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9mZWF0dXJlcy8xNScpXG5cdFx0XHRcdGZlYXR1cmVzID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcblx0XHRcdH1cblx0KVxuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPm1hcmNvLmRldiAtIEphdmEgUmVsZWFzZSB7cmVsZWFzZU5yfTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDE+SmF2YSByZWxlYXNlIHtyZWxlYXNlTnJ9IDwvaDE+XG48cD5cblx0PGEgaHJlZj1cIntyZWxlYXNlTm90ZXNVcmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+UmVsZWFzZSBub3RlczwvYT5cblx0LVxuXHQ8YSBocmVmPVwie3NwZWNpZmljYXRpb25Vcmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+U3BlY2lmaWNhdGlvbjwvYT5cblx0LVxuXHQ8YSBocmVmPVwie3NwZWNpZmljYXRpb25Vcmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+SkVQUzwvYT5cblxuXG48L3A+XG5cbjxwPlRoaXMgaXMgdGhlICdhYm91dCcgcGFnZS4gVGhlcmUncyBub3QgbXVjaCBoZXJlLjwvcD5cblxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRFQTJCa0MsR0FBUzs7Ozs7OzsyQkFHekIsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBQVQsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NENBRWhCLEdBQWU7Ozs2Q0FFZixHQUFnQjs7OzZDQUVoQixHQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkdBVE8sR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBaEJqQyxPQUFPLENBQUMsSUFBSTtLQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7U0FDWCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7S0FUdkIsU0FBUyxHQUFHLEVBQUU7S0FDZCxlQUFlLDJCQUEyQixTQUFTO0tBQ25ELGdCQUFnQiwyQ0FBMkMsU0FBUztLQUNwRSxPQUFPLDRDQUE0QyxTQUFTO0tBRTVELFFBQVE7O0NBU1osT0FBTyxnQkFDVSxRQUFRO1FBQ2hCLE1BQU0sU0FBUyxLQUFLLENBQUMsbUNBQW1DO0VBQzlELFFBQVEsU0FBUyxNQUFNLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
