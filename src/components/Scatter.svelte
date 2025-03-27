<script>
  import {getContext} from "svelte";
  const {data, xGet, yGet, xScale, yScale} = getContext("LayerCake")
  export let r = 4
  export let fill = "#000"
  export let stroke = "#000"
  export let strokeWidth = 0
  export let propData = undefined
  $: width = `${r*2}px`
  $: height = width;
  $: inputData = propData === undefined ? $data : propData;
</script>

<div>
  {#each inputData as d}
    {@const left = $xGet(d)}
    {@const top = $yGet(d)}
    <div class = "circle absolute rounded-full" style:left="{left}px" style:top="{top}px" style:width style:height style:background-color={fill} style:border="{strokeWidth}px solid {stroke}" ></div>
  {/each}
</div>

<style>
  .circle{
      /* apparently tailwind doesn't play nice with this */
      transform: translate(-50%, -50%);
    }
</style>
