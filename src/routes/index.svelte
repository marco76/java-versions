<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	h2 {
		font-size: 1.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}
	h2, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	.title {
		color: darkgray;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	.img-container {
		display: flex;
		flex-direction: row;
	}

	.lts-releases {
		color: darkorange;
		text-align: left;
	}
	.last-release {
		color: darkgreen;
		text-align: left;
	}
	.caption {
		color: gray;
		font-size: 8px;
	}
	.img-detail {
		display: flex;
		flex-direction: column;
	}
</style>

<svelte:head>
	<title>Java versions</title>
</svelte:head>

<h1 class="title" style="font-size: 3em">What's new in Java </h1>
	<div class="img-container">
		<div class="img-detail">
			<img src="java-versions.gif">
			<span class="caption">End of Premier Support <a href="https://www.oracle.com/java/technologies/java-se-support-roadmap.html" target="_blank">Source Oracle</a>
			</span>
		</div>
		<div style="margin-left: 40px">
			<p class="lts-releases">LTS versions: 8 (March 2014) and 11 (September 2018)</p>
			<p class="last-release">Current version: 15 (September 2020)</p>
		</div>
	</div>

	<h2 class="title">Download the JDK</h2>
	<p>
	AdoptOpenJDK (Recommended) <a href="https://adoptopenjdk.net">adoptopenjdk.net</a>
	</p>
	<p>
	Oracle JDK <a href="https://www.oracle.com/java/technologies/javase-downloads.html" target="_blank">Oracle Java</a>
	</p>



