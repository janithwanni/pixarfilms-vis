<script>
import { LayerCake, Html, Svg } from "layercake";
import {getContext} from "svelte";
import * as d3 from "d3";
import Scatter from "$components/Scatter.svelte";
import Line from "$components/Line.svelte";
import AxisX from "$components/AxisX.svelte";
import AxisY from "$components/AxisY.svelte";
export let data;

let padding = {top: 0, bottom: 0, left: 20, right: 0}
const colorScale = getContext("colorScale");
console.log(colorScale("G"), colorScale("PG"))
</script>

<div class = "h-screen px-4 py-2 md:px-16 md:py-6 lg:px-32 lg:py-8 grid grid-rows-[5rem_3fr_1fr] grid-flow-cols font-winky">
<div>
  <div class="text-2xl lg:text-4xl font-bold mx-auto font-playfair">Are the kids all right?</div>
  <div class="py-1">
  Through out time we look at the change in the <span class="italic">Runtime (in minutes) </span> for Pixar films that are rated <span class="font-bold" style="color: {colorScale('G')}">"G" for "General Audience" </span> and <span class="font-bold" style="color: {colorScale('PG')}">"PG" for "Parental Guidance".</span>
  </div>
</div>

<div class="width-full height-fit py-18">
  <LayerCake {data} x="x" y="y" xScale={d3.scaleUtc()} debug={true} {padding}>
    <Html>
      <Scatter propData={data.filter(x => x.film_rating == "G")} stroke={colorScale("G")} fill={colorScale("G")}/>
      <Scatter propData={data.filter(x => x.film_rating == "PG")} stroke={colorScale("PG")} fill={colorScale("PG")} />
      <AxisX />
      <AxisY />
    </Html>
    <Svg >
      <Line propData={data.filter(x => x.film_rating == "G")} stroke={colorScale("G")} />
      <Line propData={data.filter(x => x.film_rating == "PG")} stroke={colorScale("PG")} />
    </Svg>
  </LayerCake> 
</div>
<div>
<p>I wanted to see if the movies that were rated for children were having shorter runtimes to appease to the deteriorating attention span of children.</p>
<br/>
<div class="mx-auto block text-center font-bold text-2xl font-playfair">It seems like that is not the case.</div>
</div>
</div>

<style>
</style>
