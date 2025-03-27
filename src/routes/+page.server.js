import csvString from '$src/data/films.csv?raw'
import {csvParse} from 'd3-dsv';
import {preproc} from '$lib/preproc.js'

// export const prerender = true;

export function load() {
  const filmData= csvParse(csvString, preproc)
  return {
    filmData: filmData
  }
}
