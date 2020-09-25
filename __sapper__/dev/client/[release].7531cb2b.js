import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, r as globals, a as space, e as element, t as text, w as create_component, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, x as claim_component, l as add_location, j as attr_dev, m as insert_dev, n as append_dev, y as mount_component, z as set_data_dev, A as transition_in, B as transition_out, C as destroy_component } from './client.c0d91c8b.js';
import { D as DataTableFeature } from './DataTableFeature.75d259aa.js';

/* src/routes/java/[release].svelte generated by Svelte v3.26.0 */

const { Object: Object_1 } = globals;
const file = "src/routes/java/[release].svelte";

function create_fragment(ctx) {
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
			add_location(h1, file, 47, 0, 1371);
			attr_dev(a0, "href", /*releaseNotesUrl*/ ctx[1]);
			attr_dev(a0, "target", "_blank");
			add_location(a0, file, 49, 4, 1414);
			attr_dev(a1, "href", /*releaseNotesUrl*/ ctx[1]);
			attr_dev(a1, "target", "_blank");
			add_location(a1, file, 51, 4, 1486);
			attr_dev(a2, "href", /*jepsUrl*/ ctx[2]);
			attr_dev(a2, "target", "_blank");
			add_location(a2, file, 53, 4, 1558);
			add_location(p, file, 48, 0, 1406);
			add_location(h30, file, 57, 0, 1610);
			add_location(h31, file, 60, 0, 1691);
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
		id: create_fragment.name,
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

function instance($$self, $$props, $$invalidate) {
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
		init(this, options, instance, create_fragment, safe_not_equal, { releaseNr: 0, features: 5 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Breleaseu5D",
			options,
			id: create_fragment.name
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3JlbGVhc2VdLjc1MzFjYjJiLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2phdmEvW3JlbGVhc2VdLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcyB9KSB7XG4gICAgICAgIC8vIHRoZSBgc2x1Z2AgcGFyYW1ldGVyIGlzIGF2YWlsYWJsZSBiZWNhdXNlXG4gICAgICAgIC8vIHRoaXMgZmlsZSBpcyBjYWxsZWQgW3NsdWddLnN2ZWx0ZVxuICAgICAgICBjb25zdCB7IHJlbGVhc2UgfSA9IHBhcmFtcztcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2ZlYXR1cmVzLyR7cmVsZWFzZX1gKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgcmVsZWFzZU5yOiByZWxlYXNlLCBmZWF0dXJlczogZGF0YSB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihyZXMuc3RhdHVzLCBkYXRhLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IERhdGFUYWJsZUZlYXR1cmUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRGF0YVRhYmxlRmVhdHVyZS5zdmVsdGVcIjtcbiAgICBsZXQgcmVsZWFzZU5vdGVzVXJsO1xuICAgIGxldCBzcGVjaWZpY2F0aW9uVXJsO1xuICAgIGxldCBqZXBzVXJsO1xuICAgIGxldCBkZWxpdmVyZWQ7XG4gICAgbGV0IHByZXZpZXc7XG5cbiAgICBleHBvcnQgbGV0IHJlbGVhc2VOcjtcbiAgICBleHBvcnQgbGV0IGZlYXR1cmVzID0gW107XG5cbiAgICAkOmRlbGl2ZXJlZCA9IGZlYXR1cmVzLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZS5kZWxpdmVyZWQpO1xuICAgICQ6cHJldmlldyA9IGZlYXR1cmVzLmZpbHRlcih2YWx1ZSA9PiAhdmFsdWUuZGVsaXZlcmVkKVxuICAgICQ6cmVsZWFzZU5vdGVzVXJsID0gYGh0dHBzOi8vamRrLmphdmEubmV0LyR7cmVsZWFzZU5yfS9yZWxlYXNlLW5vdGVzYDtcbiAgICAkOnNwZWNpZmljYXRpb25VcmwgPSBgaHR0cHM6Ly9jci5vcGVuamRrLmphdmEubmV0L35pcmlzL3NlLyR7cmVsZWFzZU5yfS9sYXRlc3RTcGVjLy9hcGkvaW5kZXguaHRtbGBcbiAgICAkOmplcHNVcmwgPSBgaHR0cHM6Ly9vcGVuamRrLmphdmEubmV0L3Byb2plY3RzL2pkay8ke3JlbGVhc2VOcn0vYDtcblxuXG5cbiAgICBmdW5jdGlvbiBnZXRLZXlzKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGFbMF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG4gICAgPHRpdGxlPm1hcmNvLmRldiAtIEphdmEgUmVsZWFzZSB7cmVsZWFzZU5yfTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDE+SmF2YSByZWxlYXNlIHtyZWxlYXNlTnJ9IDwvaDE+XG48cD5cbiAgICA8YSBocmVmPVwie3JlbGVhc2VOb3Rlc1VybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5SZWxlYXNlIG5vdGVzPC9hPlxuICAgIC1cbiAgICA8YSBocmVmPVwie3JlbGVhc2VOb3Rlc1VybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5TcGVjaWZpY2F0aW9uPC9hPlxuICAgIC1cbiAgICA8YSBocmVmPVwie2plcHNVcmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+SkVQUzwvYT5cblxuXG48L3A+XG48aDM+RGVsaXZlcmVkPC9oMz5cbjxEYXRhVGFibGVGZWF0dXJlIGZlYXR1cmVzPVwie2RlbGl2ZXJlZH1cIj48L0RhdGFUYWJsZUZlYXR1cmU+XG5cbjxoMz5QcmV2aWV3IG9ubHk8L2gzPlxuPERhdGFUYWJsZUZlYXR1cmUgZmVhdHVyZXM9XCJ7cHJldmlld31cIj48L0RhdGFUYWJsZUZlYXR1cmU+XG5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRFQTRDcUMsR0FBUzs7O29DQWNqQixHQUFTOzs7OztrQ0FHVCxHQUFPOzs7Ozs7Ozs7MkJBZGxCLEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQ0FBVCxHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0Q0FFYixHQUFlOzs7NENBRWYsR0FBZTs7O29DQUVmLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJIQVRnQixHQUFTOzs7OzJFQUc1QixHQUFTOzs7NkNBRWIsR0FBZTs7Ozs2Q0FFZixHQUFlOzs7O3FDQUVmLEdBQU87Ozs7bUZBS1EsR0FBUzs7O2dGQUdULEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBNURWLE9BQU8sR0FBRyxNQUFNOzs7U0FHMUIsT0FBTyxLQUFLLE1BQU07O09BQ3BCLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxtQ0FBbUMsT0FBTztPQUNoRSxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUk7O0tBRXZCLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRztXQUNULFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUk7O0VBRTNDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTzs7OztTQXdCbEMsT0FBTyxDQUFDLElBQUk7S0FDYixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7U0FDUixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7S0FuQjdCLGVBQWU7S0FDZixnQkFBZ0I7S0FDaEIsT0FBTztLQUNQLFNBQVM7S0FDVCxPQUFPO09BRUEsU0FBUztPQUNULFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUVqQixTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFNBQVM7Ozs7b0JBQ3BELE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsU0FBUzs7OztvQkFDbkQsZUFBZSwyQkFBMkIsU0FBUzs7OztJQUNuRCxnQkFBZ0IsMkNBQTJDLFNBQVM7Ozs7b0JBQ3BFLE9BQU8sNENBQTRDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
