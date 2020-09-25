<script context="module">
    export async function preload({ params }) {
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
</script>

<script>
    import DataTableFeature from "../../components/DataTableFeature.svelte";
    let releaseNotesUrl;
    let specificationUrl;
    let jepsUrl;
    let delivered;
    let preview;

    export let releaseNr;
    export let features = [];

    $:delivered = features.filter(value => value.delivered);
    $:preview = features.filter(value => !value.delivered)
    $:releaseNotesUrl = `https://jdk.java.net/${releaseNr}/release-notes`;
    $:specificationUrl = `https://cr.openjdk.java.net/~iris/se/${releaseNr}/latestSpec//api/index.html`
    $:jepsUrl = `https://openjdk.java.net/projects/jdk/${releaseNr}/`;



    function getKeys(data) {
        if (data.length > 0) {
            return Object.keys(data[0]);
        }
        return []
    }
</script>

<svelte:head>
    <title>marco.dev - Java Version {releaseNr}</title>
</svelte:head>

<h1>Java {releaseNr} </h1>
<p>
    <a href="{releaseNotesUrl}" target="_blank">Release notes</a>
    -
    <a href="{releaseNotesUrl}" target="_blank">Specification</a>
    -
    <a href="{jepsUrl}" target="_blank">JEPS</a>


</p>
<DataTableFeature features="{delivered}"></DataTableFeature>

<h3>Preview only</h3>
<DataTableFeature features="{preview}"></DataTableFeature>


