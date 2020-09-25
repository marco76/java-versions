import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, f as claim_element, j as attr_dev, l as add_location, m as insert_dev, b as detach_dev, g as children, o as noop, u as validate_each_argument, I as Icon, t as text, a as space, w as create_component, h as claim_text, c as claim_space, x as claim_component, n as append_dev, y as mount_component, z as set_data_dev, A as transition_in, B as transition_out, C as destroy_component, k as set_style, D as group_outros, E as check_outros, F as destroy_each } from './client.7dcc22cc.js';

/* src/components/CategoryIcon.svelte generated by Svelte v3.26.0 */

const file = "src/components/CategoryIcon.svelte";

// (19:4) {#if categoryIcon}
function create_if_block(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { src: true, height: true, width: true });
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "icons/" + /*categoryIcon*/ ctx[0])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "height", "36");
			attr_dev(img, "width", "36");
			add_location(img, file, 19, 4, 439);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*categoryIcon*/ 1 && img.src !== (img_src_value = "icons/" + /*categoryIcon*/ ctx[0])) {
				attr_dev(img, "src", img_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(19:4) {#if categoryIcon}",
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
			add_location(span, file, 17, 0, 405);
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

	switch (category) {
		case "language":
			categoryIcon = "happy.svg";
			break;
		case "deprecated":
			categoryIcon = "bin.svg";
			break;
		case "gc":
			categoryIcon = "recycle.svg";
			break;
		case "tools":
			categoryIcon = "tools.svg";
			break;
		default:
			categoryIcon = undefined;
	}

	const writable_props = ["category"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<CategoryIcon> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("category" in $$props) $$invalidate(1, category = $$props.category);
	};

	$$self.$capture_state = () => ({ category, categoryIcon });

	$$self.$inject_state = $$props => {
		if ("category" in $$props) $$invalidate(1, category = $$props.category);
		if ("categoryIcon" in $$props) $$invalidate(0, categoryIcon = $$props.categoryIcon);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [categoryIcon, category];
}

class CategoryIcon extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { category: 1 });

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

export { DataTableFeature as D };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVRhYmxlRmVhdHVyZS45OTY5MDEyOC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlJY29uLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RhdGFUYWJsZUZlYXR1cmUuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgZXhwb3J0IGxldCBjYXRlZ29yeSA9ICdsYW5ndWFnZSc7XG4gICAgbGV0IGNhdGVnb3J5SWNvbjtcbiAgICBzd2l0Y2ggKGNhdGVnb3J5KSB7XG4gICAgICAgIGNhc2UgXCJsYW5ndWFnZVwiOiBjYXRlZ29yeUljb24gPSAnaGFwcHkuc3ZnJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJkZXByZWNhdGVkXCI6IGNhdGVnb3J5SWNvbiA9ICdiaW4uc3ZnJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJnY1wiOiBjYXRlZ29yeUljb24gPSAncmVjeWNsZS5zdmcnOyBicmVhaztcbiAgICAgICAgY2FzZSBcInRvb2xzXCI6IGNhdGVnb3J5SWNvbiA9ICd0b29scy5zdmcnOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDogY2F0ZWdvcnlJY29uID0gdW5kZWZpbmVkXG4gICAgfVxuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuXG48c3Bhbj5cbiAgICB7I2lmIGNhdGVnb3J5SWNvbn1cbiAgICA8aW1nIHNyYz1cImljb25zL3tjYXRlZ29yeUljb259XCJcbiAgICAgICAgaGVpZ2h0PVwiMzZcIlxuICAgIHdpZHRoPVwiMzZcIj5cbiAgICAgICAgey9pZn1cbjwvc3Bhbj5cbiIsIjxzY3JpcHQ+XG4gICAgaW1wb3J0IEljb24gZnJvbSBcIi4vSWNvbi5zdmVsdGVcIjtcbiAgICBpbXBvcnQgQ2F0ZWdvcnlJY29uIGZyb20gXCIuL0NhdGVnb3J5SWNvbi5zdmVsdGVcIjtcblxuICAgIGV4cG9ydCBsZXQgZmVhdHVyZXMgPSBbXTtcbiAgICBleHBvcnQgbGV0IHN0eWxlID0gXCJzdGFuZGFyZFwiO1xuPC9zY3JpcHQ+XG48c3R5bGU+XG4gICAgLnN0eWxlZC10YWJsZSB7XG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgIG1hcmdpbjogMjVweCAwO1xuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICB9XG4gICAgLnN0eWxlZC10YWJsZSB0aGVhZCB0ciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk4Nzk7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICAuc3R5bGVkLXRhYmxlIHRoLFxuICAgIC5zdHlsZWQtdGFibGUgdGQge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gICAgfVxuICAgIC5zdHlsZWQtdGFibGUgdGJvZHkgdHIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcbiAgICB9XG5cbiAgICAuc3R5bGVkLXRhYmxlIHRib2R5IHRyOm50aC1vZi10eXBlKGV2ZW4pIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICB9XG5cbiAgICAuc3R5bGVkLXRhYmxlIHRib2R5IHRyOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA5ODc5O1xuICAgIH1cblxuICAgIC5zdHlsZWQtdGFibGUgdGJvZHkgdHIuYWN0aXZlLXJvdyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzAwOTg3OTtcbiAgICB9XG4gICAgLm5hbWUge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgfVxuICAgIC5zdW1tYXJ5IHtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgIH1cbiAgICAudHJ1bmNhdGUge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cbjwvc3R5bGU+XG5cbjx0YWJsZSBjbGFzcz1cInN0eWxlZC10YWJsZVwiPlxuICAgIDx0aGVhZD5cbiAgICA8dHI+XG4gICAgICAgICAgPHRoPkpFUDwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzPVwibmFtZVwiPk5hbWU8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzcz1cImNhdGVnb3J5XCI+Q2F0ZWdvcnk8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzcz1cInN1bW1hcnlcIiBzdHlsZT1cIndpZHRoOiA1NTVweFwiPlN1bW1hcnk8L3RoPlxuICAgIDwvdHI+XG4gICAgPC90aGVhZD5cbiAgICA8dGJvZHk+XG4gICAgeyNlYWNoIGZlYXR1cmVzIGFzIGl0ZW19XG4gICAgPHRyPlxuICAgICAgICA8dGQ+PGEgIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vb3Blbmpkay5qYXZhLm5ldC9qZXBzL3tpdGVtWydqZXBOdW1iZXInXX1cIj57aXRlbVsnamVwTnVtYmVyJ119XG4gICAgICAgICAgICA8SWNvbj48L0ljb24+PC9hPjwvdGQ+XG5cbiAgICAgICAgPHRkPntpdGVtWyduYW1lJ119PC90ZD5cbiAgICAgICAgPHRkPjxDYXRlZ29yeUljb24gIGNhdGVnb3J5PVwie2l0ZW1bJ2NhdGVnb3J5J119XCIvPjwvdGQ+XG4gICAgICAgIDx0ZD57aXRlbVsnc3VtbWFyeSddfTwvdGQ+XG4gICAgPC90cj5cbiAgICAgICAgey9lYWNofVxuXG4gICAgPC90Ym9keT5cbjwvdGFibGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dFQW1CcUIsR0FBWTs7Ozs7Ozs7OzhGQUFaLEdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBRHhCLEdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUFaLEdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BakJOLFFBQVEsR0FBRyxVQUFVO0tBQzVCLFlBQVk7O1NBQ1IsUUFBUTtPQUNQLFVBQVU7R0FBRSxZQUFZLEdBQUcsV0FBVzs7T0FDdEMsWUFBWTtHQUFFLFlBQVksR0FBRyxTQUFTOztPQUN0QyxJQUFJO0dBQUUsWUFBWSxHQUFHLGFBQWE7O09BQ2xDLE9BQU87R0FBRSxZQUFZLEdBQUcsV0FBVzs7O0dBQy9CLFlBQVksR0FBRyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJDMkRnRCxHQUFJLElBQUMsV0FBVzs7Ozs7Ozt5QkFHNUYsR0FBSSxJQUFDLE1BQU07Ozs7Ozs7eUJBRVgsR0FBSSxJQUFDLFNBQVM7Ozs7Ozs7K0JBRFcsR0FBSSxJQUFDLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpRkFKZSxHQUFJLElBQUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lGQUFLLEdBQUksSUFBQyxXQUFXOzt5SEFBckMsR0FBSSxJQUFDLFdBQVc7Ozs7aUZBR3ZFLEdBQUksSUFBQyxNQUFNOzt3RUFDYyxHQUFJLElBQUMsVUFBVTs7aUZBQ3hDLEdBQUksSUFBQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQVBoQixHQUFROzs7O2dDQUFiLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUFDLEdBQVE7Ozs7K0JBQWIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFBSixNQUFJOzs7Ozs7Ozs7O2tDQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BN0RLLFFBQVE7T0FDUixLQUFLLEdBQUcsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
