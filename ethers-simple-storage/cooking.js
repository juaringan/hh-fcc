// Cook popcorn
// Pour drinks
// Start movie

/**
 * Al hacer async el setupMovie puedes utilizar los await en las llamadas internas.
 */
async function setupMovieNight() {
  await cookPopcorn();
  await pourDrinks();
  startMovie();
}

function cookPopcorn() {
  return Promise();
}

function pourDrinks() {}

function startMovie() {}
