<script>
import {getContext} from "svelte";
import * as d3 from "d3";
const {padding, xScale, xRange} = getContext("LayerCake");

export let ticks = 8;
export let gridlines = true;
export let baseline = true;
export let tickMarks = true;
export let snapTicks = true;
export let yTick = 12;
export let formatTicks = (d) => new Intl.DateTimeFormat("en-CA").format(d);

/*
$: tickVals =  Array.isArray(ticks) ?  ticks
  : typeof ticks === "function" ? ticks($xScale.tick()) 
  : $xScale.ticks(ticks)
*/

$: tickVals = $xScale.ticks(d3.utcYear.every(3))

</script>

<div class="absolute size-full axis" class:snapTicks style="transform: translate(0px, -{$padding.top}px)"> <!-- axis -->
{#each tickVals as tick,i}
  {@const xPerc = $xScale(tick) * 100 / $xRange[1]}
  {#if gridlines !== false}
    <div class = "absolute border-dashed border-l border-black" style="left:{xPerc}%;top: 0px;bottom: 0px"></div>
  {/if}
  {#if tickMarks === true}
    <div class = "absolute border-l border-t border-solid border-black" style="left:{xPerc}%; height: 6px; bottom: -6px;"></div>
  {/if}
  <div class="absolute top-full tick tick-{i}" style="left:{xPerc}%">
    <div class = "text-[0.4rem] md:text-[0.5rem] lg:text-xs text-black relative" style="white-space: nowrap; transform: translate(-50%); top:{yTick}px;">{formatTicks(tick)}</div>
  </div>
{/each}
{#if baseline === true}
<div class = "w-full absolute top-full" ></div>
{/if}
</div>

<style>
</style>
