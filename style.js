const jokes = document.getElementById("jokes");

const generate = async () => {
  try {
    const setheaders = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch("https://icanhazdadjoke.com/", setheaders);

    const data = await res.json();

    jokes.innerHTML = data.joke;
  } catch (err) {
    console.log(`${err}`);
  }
};

generate();
