var isstatus = document.querySelector("h5");
var like = document.querySelector("#like");
var dislike = document.querySelector("#dislike");

like.addEventListener("click", function () {
  isstatus.innerHTML = "liked";
  isstatus.style.color = "green";
  // isstatus.style.border = "2px solid green";
  // alert("Successfully added from freinds list");
});

dislike.addEventListener("click", function name() {
  isstatus.innerHTML = "disliked";
  isstatus.style.color = "red";
  // isstatus.style.border = "2px solid red";
  // alert("Successfully removed from freinds list");
});

var imageid = document.querySelector("h1");
var id = 1;
async function getData() {
  const url = `https://picsum.photos/id/${id}/200/300`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return url;
  } catch (error) {
    return null;
  }
}

var image = document.querySelector("#image");

async function nextpic() {
  const output = await getData();
  if (output) image.src = output;
  else image.alt = "Not available";

  imageid.innerHTML = `Image ${id}`;
  isstatus.innerHTML = "";

  id++;
}
