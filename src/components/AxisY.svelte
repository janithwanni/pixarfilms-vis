<script>
import {getContext} from "svelte";
const {padding, xRange, yScale, yRange} = getContext("LayerCake")

export let gridlines = true;
export let tickMarks = true;
export let baseline = true;
export let yTick = -1;
export let formatTick = (d) => d; // format function to format the ticks to add percentages etc.  
export let ticks = 8;

$: tickVals = Array.isArray(ticks) ? ticks 
  : typeof ticks === "function" ? ticks($yScale.tick())
  : $yScale.ticks(ticks);

</script>

<div class="absolute size-full" style="transform: translate(-{$padding.left}px, 0px)"> <!-- axis -->
{#each tickVals as tick, i}
  <div class = "absolute w-full text-xs font-thin" style="top: {$yScale(tick)* 100 /$yRange[0]}%; left: {$xRange[0]}%;"> <!-- ticks -->
    {#if gridlines !== false}
      <div class = "absolute border-t border-dashed border-black" style = "top: 0px; left: 0px; right: -{$padding.left + $padding.right}px"> <!-- gridlines -->
      </div>
    {/if}
    {#if baseline !== false && i == 0}
      {@debug baseline}
      <div id = 'baseline' class="absolute border-t border-solid" style="top:0px; left: 0px; right: -{$padding.left + padding.right}px"> <!-- baseline -->
      </div>
    {/if}
    {#if tickMarks === true}
      <div class="absolute border-t border-solid border-black" style="top:0px;left:0px;width:6px;"> <!-- tickmarks -->
      </div>
    {/if}
    <div class="absolute text-black" style="top: {yTick}px; left: 0px; transform: translate(-10px, -100%);">{formatTick(tick)}
    </div>
  </div>
{/each}
</div>
