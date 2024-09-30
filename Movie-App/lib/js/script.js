

const movieDataDiv = document.getElementById("movie-data");

let page = 1;
let totalMovieonDb = 0;
let totalMovieFetched = 0;

const fetchMoviedata = async(page) => {
  try{
    // Send HTTP GET request to TMBD API server
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjdmMGZiMWNhYTcyOTNkYjRjYTAxZTgzNDg4NzRlZCIsIm5iZiI6MTcyNjY1NjY2My41OTM2NTksInN1YiI6IjY2ZWFhZWJjNWMwNTE5YTIzNGQzNTY0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u6YTpI9IkdQBvtH1Ny2T0KqRuw3MDJ_XVZETSHA0jzc"
        },
      }
    );

    const data = await response.json();

    // Rendering Movie Interface
    if (data && data.results.length > 0) {
      totalMovieFetched += data.results.length;
      totalMovieonDb = data.total_results;

      const fragment = document.createDocumentFragment(); // Use document fragment for efficiency

      data.results.forEach((movie, index) => {
        const movieCol = document.createElement("div");
        movieCol.classList.add("col-12", "col-md-6", "col-lg-3", "mb-4");

        const modalId = `modal-page-${page}-index-${index}`; // Unique modal ID

        movieCol.innerHTML = `
        <div class="card" style="width: 100%;">
            <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="..." class="card-img-top" />
            <div class="card-body">
                <h5 class="card-title">${movie.original_title}</h5>
                <p class="card-text">
                    ${movie.overview.substring(0, 90)}...
                </p>
                <button type="button" class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#${modalId}">
                    Click Me
                </button>

                <div class="modal fade" id="${modalId}">
                    <div class="modal-dialog modal-md">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title" id="${modalId}Label">${movie.original_title}</h1>
                                <button type="button" class="btn-close"
                                    data-bs-dismiss="modal" aria-label="Close">
                                </button>
                            </div>
                            <div class="modal-body">
                                <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" height="100%" width="100%" alt="..." class="d-block w-100" />
                                <br>
                                <p class="card-text">Overview<br>${movie.overview}</p>
                                <br>
                                <p class="card-text">Release Date<br>${movie.release_date}</p>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        fragment.appendChild(movieCol);
      });

      movieDataDiv.appendChild(fragment); // Append all at once for efficiency
      console.log(data.results);
    }
  } catch(error) {
    document.getElementById("error-message").textContent = error.message || "Something went wrong.";
  }
};

// Infinite Scroll
  const onScrollPage = async () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  // Condition to stop fetching when all movies are loaded
  if (totalMovieFetched >= totalMovieonDb) {
    return;
  }

  // Condition for infinite scroll
  if (scrollTop + clientHeight >= scrollHeight - 200) { // Adjust threshold dynamically
    page += 1;
    await fetchMoviedata(page);
  }
};

// Event Listeners for loading movies and infinite scroll
window.addEventListener("load", () => fetchMoviedata(page));
window.addEventListener("scroll", onScrollPage);
f