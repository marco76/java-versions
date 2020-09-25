<style>
    .tooltip {
        position: relative;
        display: inline-block;
        border-bottom: 0px dotted black;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 150%;
        left: 50%;
        margin-left: -60px;
    }

    .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
    }
</style>

<span class="tooltip">
<img
        src="icons/file-text.svg"
        alt=""
        height="12"
        width="12"
        style="color: gray"
/><span class="tooltiptext">JEP detail</span>
</span>
