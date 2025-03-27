export function preproc(d) {
  return {
    id: d.number,
    x: new Date(d.release_date),
    y: +d.run_time,
    film_rating: d.film_rating
  }
}
