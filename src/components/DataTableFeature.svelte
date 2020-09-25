<script>
    import Icon from "./Icon.svelte";
    import CategoryIcon from "./CategoryIcon.svelte";

    export let features = [];
    export let style = "standard";
</script>
<style>
    .styled-table {
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 400px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }
    .styled-table thead tr {
        background-color: #009879;
        color: #ffffff;
        text-align: left;
    }
    .styled-table th,
    .styled-table td {
        padding: 12px 15px;
    }
    .styled-table tbody tr {
        border-bottom: 1px solid #dddddd;
    }

    .styled-table tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }

    .styled-table tbody tr:last-of-type {
        border-bottom: 2px solid #009879;
    }

    .styled-table tbody tr.active-row {
        font-weight: bold;
        color: #009879;
    }
    .name {
        width: 250px;
    }
    .summary {
        width: 400px;
    }
    .truncate {
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>

<table class="styled-table">
    <thead>
    <tr>
          <th>JEP</th>
          <th class="name">Name</th>
          <th class="category">Category</th>
          <th class="summary" style="width: 555px">Summary</th>
    </tr>
    </thead>
    <tbody>
    {#each features as item}
    <tr>
        <td><a  target="_blank" href="http://openjdk.java.net/jeps/{item['jepNumber']}">{item['jepNumber']}
            <Icon></Icon></a></td>

        <td>{item['name']}</td>
        <td><CategoryIcon  category="{item['category']}"/></td>
        <td>{item['summary']}</td>
    </tr>
        {/each}

    </tbody>
</table>
