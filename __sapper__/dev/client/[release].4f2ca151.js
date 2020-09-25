import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, f as claim_element, g as children, c as claim_space, h as claim_text, b as detach_dev, j as attr_dev, k as set_style, l as add_location, m as insert_dev, n as append_dev, p as set_data_dev, o as noop, r as validate_each_argument, I as Icon, u as create_component, w as claim_component, x as mount_component, y as transition_in, z as transition_out, A as destroy_component, B as group_outros, C as check_outros, D as destroy_each, E as globals, q as query_selector_all } from './client.957a6738.js';

/* src/components/CategoryIcon.svelte generated by Svelte v3.26.0 */

const file = "src/components/CategoryIcon.svelte";

// (23:4) {#if categoryIcon}
function create_if_block(ctx) {
	let div1;
	let img;
	let img_src_value;
	let t0;
	let div0;
	let t1;

	const block = {
		c: function create() {
			div1 = element("div");
			img = element("img");
			t0 = space();
			div0 = element("div");
			t1 = text(/*categoryLabel*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", {});
			var div1_nodes = children(div1);

			img = claim_element(div1_nodes, "IMG", {
				src: true,
				height: true,
				width: true,
				style: true
			});

			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", {});
			var div0_nodes = children(div0);
			t1 = claim_text(div0_nodes, /*categoryLabel*/ ctx[1]);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "icons/" + /*categoryIcon*/ ctx[0])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "height", "32");
			attr_dev(img, "width", "32");
			set_style(img, "color", "lightgray");
			add_location(img, file, 24, 13, 623);
			add_location(div0, file, 28, 12, 770);
			add_location(div1, file, 23, 8, 604);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, img);
			append_dev(div1, t0);
			append_dev(div1, div0);
			append_dev(div0, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*categoryIcon*/ 1 && img.src !== (img_src_value = "icons/" + /*categoryIcon*/ ctx[0])) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*categoryLabel*/ 2) set_data_dev(t1, /*categoryLabel*/ ctx[1]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(23:4) {#if categoryIcon}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let span;
	let if_block = /*categoryIcon*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			span = element("span");
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", {});
			var span_nodes = children(span);
			if (if_block) if_block.l(span_nodes);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(span, file, 21, 0, 566);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			if (if_block) if_block.m(span, null);
		},
		p: function update(ctx, [dirty]) {
			if (/*categoryIcon*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(span, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
			if (if_block) if_block.d();
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("CategoryIcon", slots, []);
	let { category = "language" } = $$props;
	let categoryIcon;
	let categoryLabel;

	switch (category) {
		case "language":
			categoryIcon = "happy.svg";
			categoryLabel = "Language";
			break;
		case "deprecated":
			categoryIcon = "bin.svg";
			categoryLabel = "Deprecated";
			break;
		case "gc":
			categoryIcon = "recycle.svg";
			categoryLabel = "Garbage Collector";
			break;
		case "tools":
			categoryIcon = "tools.svg";
			categoryLabel = "Tools";
			break;
		default:
			categoryIcon = undefined;
	}

	const writable_props = ["category"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<CategoryIcon> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("category" in $$props) $$invalidate(2, category = $$props.category);
	};

	$$self.$capture_state = () => ({ category, categoryIcon, categoryLabel });

	$$self.$inject_state = $$props => {
		if ("category" in $$props) $$invalidate(2, category = $$props.category);
		if ("categoryIcon" in $$props) $$invalidate(0, categoryIcon = $$props.categoryIcon);
		if ("categoryLabel" in $$props) $$invalidate(1, categoryLabel = $$props.categoryLabel);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [categoryIcon, categoryLabel, category];
}

class CategoryIcon extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { category: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CategoryIcon",
			options,
			id: create_fragment.name
		});
	}

	get category() {
		throw new Error("<CategoryIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set category(value) {
		throw new Error("<CategoryIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/DataTableFeature.svelte generated by Svelte v3.26.0 */
const file$1 = "src/components/DataTableFeature.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (66:4) {#each features as item}
function create_each_block(ctx) {
	let tr;
	let td0;
	let a;
	let t0_value = /*item*/ ctx[2]["jepNumber"] + "";
	let t0;
	let t1;
	let icon;
	let a_href_value;
	let t2;
	let td1;
	let t3_value = /*item*/ ctx[2]["name"] + "";
	let t3;
	let t4;
	let td2;
	let categoryicon;
	let t5;
	let td3;
	let t6_value = /*item*/ ctx[2]["summary"] + "";
	let t6;
	let t7;
	let current;
	icon = new Icon({ $$inline: true });

	categoryicon = new CategoryIcon({
			props: { category: /*item*/ ctx[2]["category"] },
			$$inline: true
		});

	const block = {
		c: function create() {
			tr = element("tr");
			td0 = element("td");
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			create_component(icon.$$.fragment);
			t2 = space();
			td1 = element("td");
			t3 = text(t3_value);
			t4 = space();
			td2 = element("td");
			create_component(categoryicon.$$.fragment);
			t5 = space();
			td3 = element("td");
			t6 = text(t6_value);
			t7 = space();
			this.h();
		},
		l: function claim(nodes) {
			tr = claim_element(nodes, "TR", { class: true });
			var tr_nodes = children(tr);
			td0 = claim_element(tr_nodes, "TD", { class: true });
			var td0_nodes = children(td0);
			a = claim_element(td0_nodes, "A", { target: true, href: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			t1 = claim_space(a_nodes);
			claim_component(icon.$$.fragment, a_nodes);
			a_nodes.forEach(detach_dev);
			td0_nodes.forEach(detach_dev);
			t2 = claim_space(tr_nodes);
			td1 = claim_element(tr_nodes, "TD", { class: true });
			var td1_nodes = children(td1);
			t3 = claim_text(td1_nodes, t3_value);
			td1_nodes.forEach(detach_dev);
			t4 = claim_space(tr_nodes);
			td2 = claim_element(tr_nodes, "TD", { class: true });
			var td2_nodes = children(td2);
			claim_component(categoryicon.$$.fragment, td2_nodes);
			td2_nodes.forEach(detach_dev);
			t5 = claim_space(tr_nodes);
			td3 = claim_element(tr_nodes, "TD", { class: true });
			var td3_nodes = children(td3);
			t6 = claim_text(td3_nodes, t6_value);
			td3_nodes.forEach(detach_dev);
			t7 = claim_space(tr_nodes);
			tr_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "target", "_blank");
			attr_dev(a, "href", a_href_value = "http://openjdk.java.net/jeps/" + /*item*/ ctx[2]["jepNumber"]);
			add_location(a, file$1, 67, 12, 1488);
			attr_dev(td0, "class", "svelte-fhl9hc");
			add_location(td0, file$1, 67, 8, 1484);
			attr_dev(td1, "class", "svelte-fhl9hc");
			add_location(td1, file$1, 70, 8, 1628);
			attr_dev(td2, "class", "svelte-fhl9hc");
			add_location(td2, file$1, 71, 8, 1660);
			attr_dev(td3, "class", "svelte-fhl9hc");
			add_location(td3, file$1, 72, 8, 1724);
			attr_dev(tr, "class", "svelte-fhl9hc");
			add_location(tr, file$1, 66, 4, 1471);
		},
		m: function mount(target, anchor) {
			insert_dev(target, tr, anchor);
			append_dev(tr, td0);
			append_dev(td0, a);
			append_dev(a, t0);
			append_dev(a, t1);
			mount_component(icon, a, null);
			append_dev(tr, t2);
			append_dev(tr, td1);
			append_dev(td1, t3);
			append_dev(tr, t4);
			append_dev(tr, td2);
			mount_component(categoryicon, td2, null);
			append_dev(tr, t5);
			append_dev(tr, td3);
			append_dev(td3, t6);
			append_dev(tr, t7);
			current = true;
		},
		p: function update(ctx, dirty) {
			if ((!current || dirty & /*features*/ 1) && t0_value !== (t0_value = /*item*/ ctx[2]["jepNumber"] + "")) set_data_dev(t0, t0_value);

			if (!current || dirty & /*features*/ 1 && a_href_value !== (a_href_value = "http://openjdk.java.net/jeps/" + /*item*/ ctx[2]["jepNumber"])) {
				attr_dev(a, "href", a_href_value);
			}

			if ((!current || dirty & /*features*/ 1) && t3_value !== (t3_value = /*item*/ ctx[2]["name"] + "")) set_data_dev(t3, t3_value);
			const categoryicon_changes = {};
			if (dirty & /*features*/ 1) categoryicon_changes.category = /*item*/ ctx[2]["category"];
			categoryicon.$set(categoryicon_changes);
			if ((!current || dirty & /*features*/ 1) && t6_value !== (t6_value = /*item*/ ctx[2]["summary"] + "")) set_data_dev(t6, t6_value);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			transition_in(categoryicon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			transition_out(categoryicon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(tr);
			destroy_component(icon);
			destroy_component(categoryicon);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(66:4) {#each features as item}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let table;
	let thead;
	let tr;
	let th0;
	let t0;
	let t1;
	let th1;
	let t2;
	let t3;
	let th2;
	let t4;
	let t5;
	let th3;
	let t6;
	let t7;
	let tbody;
	let current;
	let each_value = /*features*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			table = element("table");
			thead = element("thead");
			tr = element("tr");
			th0 = element("th");
			t0 = text("JEP");
			t1 = space();
			th1 = element("th");
			t2 = text("Name");
			t3 = space();
			th2 = element("th");
			t4 = text("Category");
			t5 = space();
			th3 = element("th");
			t6 = text("Summary");
			t7 = space();
			tbody = element("tbody");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			table = claim_element(nodes, "TABLE", { class: true });
			var table_nodes = children(table);
			thead = claim_element(table_nodes, "THEAD", {});
			var thead_nodes = children(thead);
			tr = claim_element(thead_nodes, "TR", { class: true });
			var tr_nodes = children(tr);
			th0 = claim_element(tr_nodes, "TH", { class: true });
			var th0_nodes = children(th0);
			t0 = claim_text(th0_nodes, "JEP");
			th0_nodes.forEach(detach_dev);
			t1 = claim_space(tr_nodes);
			th1 = claim_element(tr_nodes, "TH", { class: true });
			var th1_nodes = children(th1);
			t2 = claim_text(th1_nodes, "Name");
			th1_nodes.forEach(detach_dev);
			t3 = claim_space(tr_nodes);
			th2 = claim_element(tr_nodes, "TH", { class: true });
			var th2_nodes = children(th2);
			t4 = claim_text(th2_nodes, "Category");
			th2_nodes.forEach(detach_dev);
			t5 = claim_space(tr_nodes);
			th3 = claim_element(tr_nodes, "TH", { class: true, style: true });
			var th3_nodes = children(th3);
			t6 = claim_text(th3_nodes, "Summary");
			th3_nodes.forEach(detach_dev);
			tr_nodes.forEach(detach_dev);
			thead_nodes.forEach(detach_dev);
			t7 = claim_space(table_nodes);
			tbody = claim_element(table_nodes, "TBODY", {});
			var tbody_nodes = children(tbody);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(tbody_nodes);
			}

			tbody_nodes.forEach(detach_dev);
			table_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(th0, "class", "svelte-fhl9hc");
			add_location(th0, file$1, 58, 10, 1244);
			attr_dev(th1, "class", "name svelte-fhl9hc");
			add_location(th1, file$1, 59, 10, 1267);
			attr_dev(th2, "class", "category svelte-fhl9hc");
			add_location(th2, file$1, 60, 10, 1304);
			attr_dev(th3, "class", "summary svelte-fhl9hc");
			set_style(th3, "width", "555px");
			add_location(th3, file$1, 61, 10, 1349);
			attr_dev(tr, "class", "svelte-fhl9hc");
			add_location(tr, file$1, 57, 4, 1229);
			add_location(thead, file$1, 56, 4, 1217);
			add_location(tbody, file$1, 64, 4, 1430);
			attr_dev(table, "class", "styled-table svelte-fhl9hc");
			add_location(table, file$1, 55, 0, 1184);
		},
		m: function mount(target, anchor) {
			insert_dev(target, table, anchor);
			append_dev(table, thead);
			append_dev(thead, tr);
			append_dev(tr, th0);
			append_dev(th0, t0);
			append_dev(tr, t1);
			append_dev(tr, th1);
			append_dev(th1, t2);
			append_dev(tr, t3);
			append_dev(tr, th2);
			append_dev(th2, t4);
			append_dev(tr, t5);
			append_dev(tr, th3);
			append_dev(th3, t6);
			append_dev(table, t7);
			append_dev(table, tbody);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tbody, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*features*/ 1) {
				each_value = /*features*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(tbody, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(table);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("DataTableFeature", slots, []);
	let { features = [] } = $$props;
	let { style = "standard" } = $$props;
	const writable_props = ["features", "style"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<DataTableFeature> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("features" in $$props) $$invalidate(0, features = $$props.features);
		if ("style" in $$props) $$invalidate(1, style = $$props.style);
	};

	$$self.$capture_state = () => ({ Icon, CategoryIcon, features, style });

	$$self.$inject_state = $$props => {
		if ("features" in $$props) $$invalidate(0, features = $$props.features);
		if ("style" in $$props) $$invalidate(1, style = $$props.style);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [features, style];
}

class DataTableFeature extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { features: 0, style: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "DataTableFeature",
			options,
			id: create_fragment$1.name
		});
	}

	get features() {
		throw new Error("<DataTableFeature>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set features(value) {
		throw new Error("<DataTableFeature>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get style() {
		throw new Error("<DataTableFeature>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set style(value) {
		throw new Error("<DataTableFeature>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/java/[release].svelte generated by Svelte v3.26.0 */

const { Object: Object_1 } = globals;
const file$2 = "src/routes/java/[release].svelte";

function create_fragment$2(ctx) {
	let title_value;
	let t0;
	let h1;
	let t1;
	let t2;
	let t3;
	let p;
	let a0;
	let t4;
	let t5;
	let a1;
	let t6;
	let t7;
	let a2;
	let t8;
	let t9;
	let h30;
	let t10;
	let t11;
	let datatablefeature0;
	let t12;
	let h31;
	let t13;
	let t14;
	let datatablefeature1;
	let current;
	document.title = title_value = "marco.dev - Java Release " + /*releaseNr*/ ctx[0];

	datatablefeature0 = new DataTableFeature({
			props: { features: /*delivered*/ ctx[3] },
			$$inline: true
		});

	datatablefeature1 = new DataTableFeature({
			props: { features: /*preview*/ ctx[4] },
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Java release ");
			t2 = text(/*releaseNr*/ ctx[0]);
			t3 = space();
			p = element("p");
			a0 = element("a");
			t4 = text("Release notes");
			t5 = text("\n    -\n    ");
			a1 = element("a");
			t6 = text("Specification");
			t7 = text("\n    -\n    ");
			a2 = element("a");
			t8 = text("JEPS");
			t9 = space();
			h30 = element("h3");
			t10 = text("Delivered");
			t11 = space();
			create_component(datatablefeature0.$$.fragment);
			t12 = space();
			h31 = element("h3");
			t13 = text("Preview only");
			t14 = space();
			create_component(datatablefeature1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-vave9\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Java release ");
			t2 = claim_text(h1_nodes, /*releaseNr*/ ctx[0]);
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			a0 = claim_element(p_nodes, "A", { href: true, target: true });
			var a0_nodes = children(a0);
			t4 = claim_text(a0_nodes, "Release notes");
			a0_nodes.forEach(detach_dev);
			t5 = claim_text(p_nodes, "\n    -\n    ");
			a1 = claim_element(p_nodes, "A", { href: true, target: true });
			var a1_nodes = children(a1);
			t6 = claim_text(a1_nodes, "Specification");
			a1_nodes.forEach(detach_dev);
			t7 = claim_text(p_nodes, "\n    -\n    ");
			a2 = claim_element(p_nodes, "A", { href: true, target: true });
			var a2_nodes = children(a2);
			t8 = claim_text(a2_nodes, "JEPS");
			a2_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			h30 = claim_element(nodes, "H3", {});
			var h30_nodes = children(h30);
			t10 = claim_text(h30_nodes, "Delivered");
			h30_nodes.forEach(detach_dev);
			t11 = claim_space(nodes);
			claim_component(datatablefeature0.$$.fragment, nodes);
			t12 = claim_space(nodes);
			h31 = claim_element(nodes, "H3", {});
			var h31_nodes = children(h31);
			t13 = claim_text(h31_nodes, "Preview only");
			h31_nodes.forEach(detach_dev);
			t14 = claim_space(nodes);
			claim_component(datatablefeature1.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file$2, 47, 0, 1371);
			attr_dev(a0, "href", /*releaseNotesUrl*/ ctx[1]);
			attr_dev(a0, "target", "_blank");
			add_location(a0, file$2, 49, 4, 1414);
			attr_dev(a1, "href", /*releaseNotesUrl*/ ctx[1]);
			attr_dev(a1, "target", "_blank");
			add_location(a1, file$2, 51, 4, 1486);
			attr_dev(a2, "href", /*jepsUrl*/ ctx[2]);
			attr_dev(a2, "target", "_blank");
			add_location(a2, file$2, 53, 4, 1558);
			add_location(p, file$2, 48, 0, 1406);
			add_location(h30, file$2, 57, 0, 1610);
			add_location(h31, file$2, 60, 0, 1691);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			append_dev(h1, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, a0);
			append_dev(a0, t4);
			append_dev(p, t5);
			append_dev(p, a1);
			append_dev(a1, t6);
			append_dev(p, t7);
			append_dev(p, a2);
			append_dev(a2, t8);
			insert_dev(target, t9, anchor);
			insert_dev(target, h30, anchor);
			append_dev(h30, t10);
			insert_dev(target, t11, anchor);
			mount_component(datatablefeature0, target, anchor);
			insert_dev(target, t12, anchor);
			insert_dev(target, h31, anchor);
			append_dev(h31, t13);
			insert_dev(target, t14, anchor);
			mount_component(datatablefeature1, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*releaseNr*/ 1) && title_value !== (title_value = "marco.dev - Java Release " + /*releaseNr*/ ctx[0])) {
				document.title = title_value;
			}

			if (!current || dirty & /*releaseNr*/ 1) set_data_dev(t2, /*releaseNr*/ ctx[0]);

			if (!current || dirty & /*releaseNotesUrl*/ 2) {
				attr_dev(a0, "href", /*releaseNotesUrl*/ ctx[1]);
			}

			if (!current || dirty & /*releaseNotesUrl*/ 2) {
				attr_dev(a1, "href", /*releaseNotesUrl*/ ctx[1]);
			}

			if (!current || dirty & /*jepsUrl*/ 4) {
				attr_dev(a2, "href", /*jepsUrl*/ ctx[2]);
			}

			const datatablefeature0_changes = {};
			if (dirty & /*delivered*/ 8) datatablefeature0_changes.features = /*delivered*/ ctx[3];
			datatablefeature0.$set(datatablefeature0_changes);
			const datatablefeature1_changes = {};
			if (dirty & /*preview*/ 16) datatablefeature1_changes.features = /*preview*/ ctx[4];
			datatablefeature1.$set(datatablefeature1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(datatablefeature0.$$.fragment, local);
			transition_in(datatablefeature1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(datatablefeature0.$$.fragment, local);
			transition_out(datatablefeature1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(p);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(h30);
			if (detaching) detach_dev(t11);
			destroy_component(datatablefeature0, detaching);
			if (detaching) detach_dev(t12);
			if (detaching) detach_dev(h31);
			if (detaching) detach_dev(t14);
			destroy_component(datatablefeature1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload({ params }) {
	// the `slug` parameter is available because
	// this file is called [slug].svelte
	const { release } = params;

	const res = await this.fetch(`http://localhost:8080/features/${release}`);
	const data = await res.json();

	if (res.status === 200) {
		return { releaseNr: release, features: data };
	} else {
		this.error(res.status, data.message);
	}
}

function getKeys(data) {
	if (data.length > 0) {
		return Object.keys(data[0]);
	}

	return [];
}

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Breleaseu5D", slots, []);
	let releaseNotesUrl;
	let specificationUrl;
	let jepsUrl;
	let delivered;
	let preview;
	let { releaseNr } = $$props;
	let { features = [] } = $$props;
	const writable_props = ["releaseNr", "features"];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Breleaseu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("releaseNr" in $$props) $$invalidate(0, releaseNr = $$props.releaseNr);
		if ("features" in $$props) $$invalidate(5, features = $$props.features);
	};

	$$self.$capture_state = () => ({
		preload,
		DataTableFeature,
		releaseNotesUrl,
		specificationUrl,
		jepsUrl,
		delivered,
		preview,
		releaseNr,
		features,
		getKeys
	});

	$$self.$inject_state = $$props => {
		if ("releaseNotesUrl" in $$props) $$invalidate(1, releaseNotesUrl = $$props.releaseNotesUrl);
		if ("specificationUrl" in $$props) specificationUrl = $$props.specificationUrl;
		if ("jepsUrl" in $$props) $$invalidate(2, jepsUrl = $$props.jepsUrl);
		if ("delivered" in $$props) $$invalidate(3, delivered = $$props.delivered);
		if ("preview" in $$props) $$invalidate(4, preview = $$props.preview);
		if ("releaseNr" in $$props) $$invalidate(0, releaseNr = $$props.releaseNr);
		if ("features" in $$props) $$invalidate(5, features = $$props.features);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*features*/ 32) {
			 $$invalidate(3, delivered = features.filter(value => value.delivered));
		}

		if ($$self.$$.dirty & /*features*/ 32) {
			 $$invalidate(4, preview = features.filter(value => !value.delivered));
		}

		if ($$self.$$.dirty & /*releaseNr*/ 1) {
			 $$invalidate(1, releaseNotesUrl = `https://jdk.java.net/${releaseNr}/release-notes`);
		}

		if ($$self.$$.dirty & /*releaseNr*/ 1) {
			 specificationUrl = `https://cr.openjdk.java.net/~iris/se/${releaseNr}/latestSpec//api/index.html`;
		}

		if ($$self.$$.dirty & /*releaseNr*/ 1) {
			 $$invalidate(2, jepsUrl = `https://openjdk.java.net/projects/jdk/${releaseNr}/`);
		}
	};

	return [releaseNr, releaseNotesUrl, jepsUrl, delivered, preview, features];
}

class U5Breleaseu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, { releaseNr: 0, features: 5 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Breleaseu5D",
			options,
			id: create_fragment$2.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*releaseNr*/ ctx[0] === undefined && !("releaseNr" in props)) {
			console.warn("<U5Breleaseu5D> was created without expected prop 'releaseNr'");
		}
	}

	get releaseNr() {
		throw new Error("<U5Breleaseu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set releaseNr(value) {
		throw new Error("<U5Breleaseu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get features() {
		throw new Error("<U5Breleaseu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set features(value) {
		throw new Error("<U5Breleaseu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Breleaseu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3JlbGVhc2VdLjRmMmNhMTUxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeUljb24uc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRGF0YVRhYmxlRmVhdHVyZS5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2phdmEvW3JlbGVhc2VdLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgY2F0ZWdvcnkgPSAnbGFuZ3VhZ2UnO1xuICAgIGxldCBjYXRlZ29yeUljb247XG4gICAgbGV0IGNhdGVnb3J5TGFiZWw7XG5cbiAgICBzd2l0Y2ggKGNhdGVnb3J5KSB7XG4gICAgICAgIGNhc2UgXCJsYW5ndWFnZVwiOiBjYXRlZ29yeUljb24gPSAnaGFwcHkuc3ZnJzsgY2F0ZWdvcnlMYWJlbCA9ICdMYW5ndWFnZSc7IGJyZWFrO1xuICAgICAgICBjYXNlIFwiZGVwcmVjYXRlZFwiOiBjYXRlZ29yeUljb24gPSAnYmluLnN2Zyc7IGNhdGVnb3J5TGFiZWwgPSAnRGVwcmVjYXRlZCc7IGJyZWFrO1xuICAgICAgICBjYXNlIFwiZ2NcIjogY2F0ZWdvcnlJY29uID0gJ3JlY3ljbGUuc3ZnJzsgY2F0ZWdvcnlMYWJlbCA9ICdHYXJiYWdlIENvbGxlY3Rvcic7IGJyZWFrO1xuICAgICAgICBjYXNlIFwidG9vbHNcIjogY2F0ZWdvcnlJY29uID0gJ3Rvb2xzLnN2Zyc7IGNhdGVnb3J5TGFiZWwgPSAnVG9vbHMnOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDogY2F0ZWdvcnlJY29uID0gdW5kZWZpbmVkXG4gICAgfVxuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIC5pY29ue1xuXG4gICAgfVxuPC9zdHlsZT5cblxuPHNwYW4+XG4gICAgeyNpZiBjYXRlZ29yeUljb259XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgPGltZyBzcmM9XCJpY29ucy97Y2F0ZWdvcnlJY29ufVwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMlwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjMyXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwiY29sb3I6IGxpZ2h0Z3JheVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlMYWJlbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIHsvaWZ9XG48L3NwYW4+XG4iLCI8c2NyaXB0PlxuICAgIGltcG9ydCBJY29uIGZyb20gXCIuL0ljb24uc3ZlbHRlXCI7XG4gICAgaW1wb3J0IENhdGVnb3J5SWNvbiBmcm9tIFwiLi9DYXRlZ29yeUljb24uc3ZlbHRlXCI7XG5cbiAgICBleHBvcnQgbGV0IGZlYXR1cmVzID0gW107XG4gICAgZXhwb3J0IGxldCBzdHlsZSA9IFwic3RhbmRhcmRcIjtcbjwvc2NyaXB0PlxuPHN0eWxlPlxuICAgIC5zdHlsZWQtdGFibGUge1xuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICBtYXJnaW46IDI1cHggMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgfVxuICAgIC5zdHlsZWQtdGFibGUgdGhlYWQgdHIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ODc5O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgLnN0eWxlZC10YWJsZSB0aCxcbiAgICAuc3R5bGVkLXRhYmxlIHRkIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xuICAgIH1cbiAgICAuc3R5bGVkLXRhYmxlIHRib2R5IHRyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgfVxuXG4gICAgLnN0eWxlZC10YWJsZSB0Ym9keSB0cjpudGgtb2YtdHlwZShldmVuKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgfVxuXG4gICAgLnN0eWxlZC10YWJsZSB0Ym9keSB0cjpsYXN0LW9mLXR5cGUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwOTg3OTtcbiAgICB9XG5cbiAgICAuc3R5bGVkLXRhYmxlIHRib2R5IHRyLmFjdGl2ZS1yb3cge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICMwMDk4Nzk7XG4gICAgfVxuICAgIC5uYW1lIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgIH1cbiAgICAuc3VtbWFyeSB7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICB9XG4gICAgLnRydW5jYXRlIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG48L3N0eWxlPlxuXG48dGFibGUgY2xhc3M9XCJzdHlsZWQtdGFibGVcIj5cbiAgICA8dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgICAgIDx0aD5KRVA8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzcz1cIm5hbWVcIj5OYW1lPC90aD5cbiAgICAgICAgICA8dGggY2xhc3M9XCJjYXRlZ29yeVwiPkNhdGVnb3J5PC90aD5cbiAgICAgICAgICA8dGggY2xhc3M9XCJzdW1tYXJ5XCIgc3R5bGU9XCJ3aWR0aDogNTU1cHhcIj5TdW1tYXJ5PC90aD5cbiAgICA8L3RyPlxuICAgIDwvdGhlYWQ+XG4gICAgPHRib2R5PlxuICAgIHsjZWFjaCBmZWF0dXJlcyBhcyBpdGVtfVxuICAgIDx0cj5cbiAgICAgICAgPHRkPjxhICB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL29wZW5qZGsuamF2YS5uZXQvamVwcy97aXRlbVsnamVwTnVtYmVyJ119XCI+e2l0ZW1bJ2plcE51bWJlciddfVxuICAgICAgICAgICAgPEljb24+PC9JY29uPjwvYT48L3RkPlxuXG4gICAgICAgIDx0ZD57aXRlbVsnbmFtZSddfTwvdGQ+XG4gICAgICAgIDx0ZD48Q2F0ZWdvcnlJY29uICBjYXRlZ29yeT1cIntpdGVtWydjYXRlZ29yeSddfVwiLz48L3RkPlxuICAgICAgICA8dGQ+e2l0ZW1bJ3N1bW1hcnknXX08L3RkPlxuICAgIDwvdHI+XG4gICAgICAgIHsvZWFjaH1cblxuICAgIDwvdGJvZHk+XG48L3RhYmxlPlxuIiwiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMgfSkge1xuICAgICAgICAvLyB0aGUgYHNsdWdgIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgYmVjYXVzZVxuICAgICAgICAvLyB0aGlzIGZpbGUgaXMgY2FsbGVkIFtzbHVnXS5zdmVsdGVcbiAgICAgICAgY29uc3QgeyByZWxlYXNlIH0gPSBwYXJhbXM7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9mZWF0dXJlcy8ke3JlbGVhc2V9YCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IHJlbGVhc2VOcjogcmVsZWFzZSwgZmVhdHVyZXM6IGRhdGEgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IocmVzLnN0YXR1cywgZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBEYXRhVGFibGVGZWF0dXJlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0RhdGFUYWJsZUZlYXR1cmUuc3ZlbHRlXCI7XG4gICAgbGV0IHJlbGVhc2VOb3Rlc1VybDtcbiAgICBsZXQgc3BlY2lmaWNhdGlvblVybDtcbiAgICBsZXQgamVwc1VybDtcbiAgICBsZXQgZGVsaXZlcmVkO1xuICAgIGxldCBwcmV2aWV3O1xuXG4gICAgZXhwb3J0IGxldCByZWxlYXNlTnI7XG4gICAgZXhwb3J0IGxldCBmZWF0dXJlcyA9IFtdO1xuXG4gICAgJDpkZWxpdmVyZWQgPSBmZWF0dXJlcy5maWx0ZXIodmFsdWUgPT4gdmFsdWUuZGVsaXZlcmVkKTtcbiAgICAkOnByZXZpZXcgPSBmZWF0dXJlcy5maWx0ZXIodmFsdWUgPT4gIXZhbHVlLmRlbGl2ZXJlZClcbiAgICAkOnJlbGVhc2VOb3Rlc1VybCA9IGBodHRwczovL2pkay5qYXZhLm5ldC8ke3JlbGVhc2VOcn0vcmVsZWFzZS1ub3Rlc2A7XG4gICAgJDpzcGVjaWZpY2F0aW9uVXJsID0gYGh0dHBzOi8vY3Iub3Blbmpkay5qYXZhLm5ldC9+aXJpcy9zZS8ke3JlbGVhc2VOcn0vbGF0ZXN0U3BlYy8vYXBpL2luZGV4Lmh0bWxgXG4gICAgJDpqZXBzVXJsID0gYGh0dHBzOi8vb3Blbmpkay5qYXZhLm5ldC9wcm9qZWN0cy9qZGsvJHtyZWxlYXNlTnJ9L2A7XG5cblxuXG4gICAgZnVuY3Rpb24gZ2V0S2V5cyhkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhWzBdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpoZWFkPlxuICAgIDx0aXRsZT5tYXJjby5kZXYgLSBKYXZhIFJlbGVhc2Uge3JlbGVhc2VOcn08L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGgxPkphdmEgcmVsZWFzZSB7cmVsZWFzZU5yfSA8L2gxPlxuPHA+XG4gICAgPGEgaHJlZj1cIntyZWxlYXNlTm90ZXNVcmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+UmVsZWFzZSBub3RlczwvYT5cbiAgICAtXG4gICAgPGEgaHJlZj1cIntyZWxlYXNlTm90ZXNVcmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+U3BlY2lmaWNhdGlvbjwvYT5cbiAgICAtXG4gICAgPGEgaHJlZj1cIntqZXBzVXJsfVwiIHRhcmdldD1cIl9ibGFua1wiPkpFUFM8L2E+XG5cblxuPC9wPlxuPGgzPkRlbGl2ZXJlZDwvaDM+XG48RGF0YVRhYmxlRmVhdHVyZSBmZWF0dXJlcz1cIntkZWxpdmVyZWR9XCI+PC9EYXRhVGFibGVGZWF0dXJlPlxuXG48aDM+UHJldmlldyBvbmx5PC9oMz5cbjxEYXRhVGFibGVGZWF0dXJlIGZlYXR1cmVzPVwie3ByZXZpZXd9XCI+PC9EYXRhVGFibGVGZWF0dXJlPlxuXG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBNkJpQixHQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztpREFBYixHQUFhOzs7Ozs7Z0VBTEEsR0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs4RkFBWixHQUFZOzs7O3VFQUt6QixHQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FQckIsR0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQVosR0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FyQk4sUUFBUSxHQUFHLFVBQVU7S0FDNUIsWUFBWTtLQUNaLGFBQWE7O1NBRVQsUUFBUTtPQUNQLFVBQVU7R0FBRSxZQUFZLEdBQUcsV0FBVztHQUFFLGFBQWEsR0FBRyxVQUFVOztPQUNsRSxZQUFZO0dBQUUsWUFBWSxHQUFHLFNBQVM7R0FBRSxhQUFhLEdBQUcsWUFBWTs7T0FDcEUsSUFBSTtHQUFFLFlBQVksR0FBRyxhQUFhO0dBQUUsYUFBYSxHQUFHLG1CQUFtQjs7T0FDdkUsT0FBTztHQUFFLFlBQVksR0FBRyxXQUFXO0dBQUUsYUFBYSxHQUFHLE9BQU87OztHQUN4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