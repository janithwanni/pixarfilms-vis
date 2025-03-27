<script>
import { getContext } from "svelte";
import { line, curveLinear } from "d3";

const {data, xGet, yGet} = getContext("LayerCake")

export let stroke = "#000"
export let curve = curveLinear
export let propData = undefined

$:inputData = propData === undefined ? $data : propData;
$:path = line().x($xGet).y($yGet).curve(curve)
$:pathData = path(inputData);

</script>

<path d={pathData} {stroke} stroke-width="1px" fill="none" />

<style>
	path {
		stroke-linejoin: round;
		stroke-linecap: round;
	}
</style>
