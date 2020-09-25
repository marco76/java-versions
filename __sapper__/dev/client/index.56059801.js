import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as set_style, l as add_location, m as insert_dev, n as append_dev, o as noop } from './client.b0d5edfa.js';

/* src/routes/index.svelte generated by Svelte v3.26.0 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let div2;
	let div0;
	let img;
	let img_src_value;
	let t3;
	let span;
	let t4;
	let a0;
	let t5;
	let t6;
	let div1;
	let p0;
	let t7;
	let t8;
	let p1;
	let t9;
	let t10;
	let h2;
	let t11;
	let t12;
	let p2;
	let t13;
	let a1;
	let t14;
	let t15;
	let p3;
	let t16;
	let a2;
	let t17;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("What's new in Java");
			t2 = space();
			div2 = element("div");
			div0 = element("div");
			img = element("img");
			t3 = space();
			span = element("span");
			t4 = text("End of Premier Support ");
			a0 = element("a");
			t5 = text("Source Oracle");
			t6 = space();
			div1 = element("div");
			p0 = element("p");
			t7 = text("LTS versions: 8 (March 2014) and 11 (September 2018)");
			t8 = space();
			p1 = element("p");
			t9 = text("Current version: 15 (September 2020)");
			t10 = space();
			h2 = element("h2");
			t11 = text("Download the JDK");
			t12 = space();
			p2 = element("p");
			t13 = text("AdoptOpenJDK (Recommended) ");
			a1 = element("a");
			t14 = text("adoptopenjdk.net");
			t15 = space();
			p3 = element("p");
			t16 = text("Oracle JDK ");
			a2 = element("a");
			t17 = text("Oracle Java");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-pnm4l7\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true, style: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "What's new in Java");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, class: true });
			t3 = claim_space(div0_nodes);
			span = claim_element(div0_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t4 = claim_text(span_nodes, "End of Premier Support ");
			a0 = claim_element(span_nodes, "A", { href: true, target: true });
			var a0_nodes = children(a0);
			t5 = claim_text(a0_nodes, "Source Oracle");
			a0_nodes.forEach(detach_dev);
			span_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t6 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { style: true });
			var div1_nodes = children(div1);
			p0 = claim_element(div1_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t7 = claim_text(p0_nodes, "LTS versions: 8 (March 2014) and 11 (September 2018)");
			p0_nodes.forEach(detach_dev);
			t8 = claim_space(div1_nodes);
			p1 = claim_element(div1_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t9 = claim_text(p1_nodes, "Current version: 15 (September 2020)");
			p1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t10 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t11 = claim_text(h2_nodes, "Download the JDK");
			h2_nodes.forEach(detach_dev);
			t12 = claim_space(nodes);
			p2 = claim_element(nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t13 = claim_text(p2_nodes, "AdoptOpenJDK (Recommended) ");
			a1 = claim_element(p2_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			t14 = claim_text(a1_nodes, "adoptopenjdk.net");
			a1_nodes.forEach(detach_dev);
			p2_nodes.forEach(detach_dev);
			t15 = claim_space(nodes);
			p3 = claim_element(nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t16 = claim_text(p3_nodes, "Oracle JDK ");
			a2 = claim_element(p3_nodes, "A", { href: true, target: true });
			var a2_nodes = children(a2);
			t17 = claim_text(a2_nodes, "Oracle Java");
			a2_nodes.forEach(detach_dev);
			p3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Java versions";
			attr_dev(h1, "class", "title svelte-150p798");
			set_style(h1, "font-size", "3em");
			add_location(h1, file, 75, 0, 922);
			if (img.src !== (img_src_value = "java-versions.gif")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-150p798");
			add_location(img, file, 78, 3, 1047);
			attr_dev(a0, "href", "https://www.oracle.com/java/technologies/java-se-support-roadmap.html");
			attr_dev(a0, "target", "_blank");
			add_location(a0, file, 79, 48, 1125);
			attr_dev(span, "class", "caption svelte-150p798");
			add_location(span, file, 79, 3, 1080);
			attr_dev(div0, "class", "img-detail svelte-150p798");
			add_location(div0, file, 77, 2, 1019);
			attr_dev(p0, "class", "lts-releases svelte-150p798");
			add_location(p0, file, 83, 3, 1296);
			attr_dev(p1, "class", "last-release svelte-150p798");
			add_location(p1, file, 84, 3, 1380);
			set_style(div1, "margin-left", "40px");
			add_location(div1, file, 82, 2, 1261);
			attr_dev(div2, "class", "img-container svelte-150p798");
			add_location(div2, file, 76, 1, 989);
			attr_dev(h2, "class", "title svelte-150p798");
			add_location(h2, file, 88, 1, 1464);
			attr_dev(a1, "href", "https://adoptopenjdk.net");
			add_location(a1, file, 90, 28, 1537);
			attr_dev(p2, "class", "svelte-150p798");
			add_location(p2, file, 89, 1, 1505);
			attr_dev(a2, "href", "https://www.oracle.com/java/technologies/javase-downloads.html");
			attr_dev(a2, "target", "_blank");
			add_location(a2, file, 93, 12, 1616);
			attr_dev(p3, "class", "svelte-150p798");
			add_location(p3, file, 92, 1, 1600);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, img);
			append_dev(div0, t3);
			append_dev(div0, span);
			append_dev(span, t4);
			append_dev(span, a0);
			append_dev(a0, t5);
			append_dev(div2, t6);
			append_dev(div2, div1);
			append_dev(div1, p0);
			append_dev(p0, t7);
			append_dev(div1, t8);
			append_dev(div1, p1);
			append_dev(p1, t9);
			insert_dev(target, t10, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t11);
			insert_dev(target, t12, anchor);
			insert_dev(target, p2, anchor);
			append_dev(p2, t13);
			append_dev(p2, a1);
			append_dev(a1, t14);
			insert_dev(target, t15, anchor);
			insert_dev(target, p3, anchor);
			append_dev(p3, t16);
			append_dev(p3, a2);
			append_dev(a2, t17);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div2);
			if (detaching) detach_dev(t10);
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t12);
			if (detaching) detach_dev(p2);
			if (detaching) detach_dev(t15);
			if (detaching) detach_dev(p3);
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

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTYwNTk4MDEuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
