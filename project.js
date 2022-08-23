$(document).ready(function () {
  $(".image-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    arrows: true,
    autoplay: false,

    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});
$(document).ready(function () {
  $(".image-slider-rooms").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    autoplay: false,

    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});

let reels = document.getElementById("story-2");
let stories = document.getElementById("story-1");
let rooms = document.getElementById("story-3");
let input = document.getElementById("input");
let btn = document.getElementById("btn");

// reels.onclick = function (event) {
//   event.target.parentElement.parentElement.style.display = "none";
//   let displayreels =
//     event.target.parentElement.parentElement.parentElement.children;
//   displayreels[1].style.display = "inline-block";
//   displayreels[1].children[0].children[1].style.borderBottom =
//     "3px solid #1876F2";
//   displayreels[1].children[0].children[1].style.color = "#1876F2";
//   displayreels[1].children[0].children[0].style.color = "black";
//   displayreels[1].children[0].children[0].style.borderBottom =
//     "1px solid #e5e5e5";
// };

reels.onclick = function (event) {
  if (event.target.style.borderBottom != "3px solid #1876F2") {
    event.target.style.borderBottom = "3px solid #1876F2";
    event.target.style.color = "#1876F2";
    event.target.parentElement.children[0].style.color = "black";
    event.target.parentElement.children[0].style.borderBottom =
      "1px solid #e5e5e5";
    event.target.parentElement.children[2].style.color = "black";
    event.target.parentElement.children[2].style.borderBottom =
      "1px solid #e5e5e5";
    event.target.parentElement.children[2].style.color = "black";
    event.target.parentElement.children[2].style.borderBottom =
      "1px solid #e5e5e5";
    event.target.parentElement.parentElement.children[2].style.display =
      "block";
    event.target.parentElement.parentElement.children[1].style.display = "none";
    event.target.parentElement.parentElement.children[3].style.display = "none";
  }
};

stories.onclick = function (event) {
  if (event.target.style.borderBottom != "3px solid #1876F2") {
    event.target.style.borderBottom = "3px solid #1876F2";
    event.target.style.color = "#1876F2";
    event.target.parentElement.children[1].style.borderBottom =
      "1px solid #e5e5e5";
    event.target.parentElement.children[1].style.color = "black";
    event.target.parentElement.children[2].style.borderBottom =
      "1px solid #e5e5e5";
    event.target.parentElement.children[2].style.color = "black";
    event.target.parentElement.parentElement.children[1].style.display =
      "block";
    event.target.parentElement.parentElement.children[2].style.display = "none";
    event.target.parentElement.parentElement.children[3].style.display = "none";
  }
};
rooms.onclick = function (event) {
  if (event.target.style.borderBottom != "3px solid #1876F2") {
    event.target.style.borderBottom = "3px solid #1876F2";
    event.target.style.color = "#1876F2";
    event.target.parentElement.children[0].style.color = "black";
    event.target.parentElement.children[0].style.borderBottom =
      "1px solid #e5e5e5";
    event.target.parentElement.children[1].style.color = "black";
    event.target.parentElement.children[1].style.borderBottom =
      "1px solid #e5e5e5";
    event.target.parentElement.parentElement.children[3].style.display =
      "block";
    event.target.parentElement.parentElement.children[2].style.display = "none";
    event.target.parentElement.parentElement.children[1].style.display = "none";
  }
};

btn.onclick = function () {
  let value = input.value;
  if (value !== "") {
    let li = document.createElement("li");
    li.classList.add("list-item");

    li.innerHTML = `
    <div style="text-align:center; margin-top: 15px;">
    <div
        style="width: 500px; border: 1px solid #e5e5e5; border-radius: 10px;display: inline-block; background-color: white; margin-right: 20px;">
        <div style="display: flex; margin: 20px;">
            <img src="./Ảnh chụp màn hình 2022-08-20 140821.png" alt=""
                style="width:50px;height: 50px; border-radius: 50%;">
            <div style="font-weight: 700; margin-left: 10px;">Manh Hung Nguyen <br>
                <img src="./Ảnh chụp màn hình 2022-08-21 000028.png" alt=""
                    style="height:20px;border-radius:10px;margin-top:8px">
            </div>
        </div>

        <div class="content" style="font-size:20px;
            font-weight: 500;
            margin:20px;
            margin-bottom: 0px;
            padding-bottom:15px;
            border-bottom: 1px solid #e5e5e5;
            box-sizing: border-box;
            text-align: left;">
            ${value}</div>

        <div style="display:flex;justify-content:space-around;align-items:center;">
            <div> <i class="fas fa-thumbs-up" style="font-size:25px;color:gray;padding: 5px;"></i> Like
            </div>
            <div><i class="fa-solid fa-message" style="font-size:20px; color:gray;padding: 8px;"></i>
                Comment
            </div>
        </div>
        <div
            style="border-top:1px solid #e5e5e5 ; display: flex; align-items: center; margin:20px;margin-top:0px;margin-bottom: 0px;">
            <div>
                <img src="./Ảnh chụp màn hình 2022-08-20 140821.png"
                    style="width:40px ; height:40px;border-radius: 50%;" alt="">
            </div>
            <div>
                <form action="">
                    <input type="text" placeholder="Write a comment..."
                        style="width:400px;height:40px;border-radius:999px;border:none;background-color:#F0F2F5;margin-left:15px">
                </form>
            </div>
        </div>

    </div>


</div>
<div class="btn-group">
    <button class="delete-btn"><i class="fa-solid fa-xmark"></i></button>

</div>`;

    let ul = document.getElementById("list");
    ul.appendChild(li);

    input.value = "";
  }
};

let list = document.getElementById("list");

list.onclick = function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.parentElement.remove();
  }
};
