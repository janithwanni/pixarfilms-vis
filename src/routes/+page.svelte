<script>
import App from '$components/App.svelte';
import * as d3 from "d3";
import {setContext} from "svelte";
let { data } = $props();
let filmData = data.filmData
let colorScale = d3.scaleOrdinal([ ... new Set(filmData.map(x => x.film_rating))], ["#e2998a", "#663171"])
setContext("colorScale", colorScale)
</script>

<App data={filmData}/>

