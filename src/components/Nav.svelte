<script>
	import Icon from "./Icon.svelte";

	export let segment;
	import {stores} from '@sapper/app';

	const {page} = stores();
	let version;
	$: version = $page.params && $page.params['release'] ? $page.params['release'] : undefined;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
	.divider {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	a:hover {
		font-style: italic;
	}
	.jdk-devel {
		color: darkred;
	}

	.jdk-current {
		color: green;
	}
	.jdk-lts {
		color: orange;
	}
</style>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li class="divider">|</li>
		<li><a aria-current="{segment === 'java' && version === '16' ? 'page' : undefined}" href="java/16" class="jdk-devel">Java 16</a></li>
		<li><a aria-current="{segment === 'java' && version === '15' ? 'page' : undefined}" href="java/15" class="jdk-current">Java 15</a></li>
		<li><a aria-current="{segment === 'java' && version === '14'  ? 'page' : undefined}" href="java/14">Java 14</a></li>
		<li><a aria-current="{segment === 'java'&& version === '13'  ? 'page' : undefined}" href="java/13">Java 13</a></li>
		<li><a aria-current="{segment === 'java'&& version === '12'  ? 'page' : undefined}" href="java/12">Java 12</a></li>
		<li><a aria-current="{segment === 'java'&& version === '11'  ? 'page' : undefined}" href="java/11" class="jdk-lts">Java 11</a></li>
		<li><a aria-current="{segment === 'java'&& version === '10'  ? 'page' : undefined}" href="java/10">Java 10</a></li>
		<li><a aria-current="{segment === 'java'&& version === '9'  ? 'page' : undefined}" href="java/9">Java 9</a></li>
		<li><a aria-current="{segment === 'java'&& version === '8'  ? 'page' : undefined}" href="java/8" class="jdk-lts">Java 8</a></li>
		<li class="divider">|</li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></li>
		<li class="divider">|</li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="https://marco.dev">marco.dev <Icon></Icon></a></li>
	</ul>
</nav>
