const wrap_bkd = document.querySelector('.wrap_bkd'),
wallpaper = document.querySelector('.wallpaper'),
ment = document.querySelectorAll(".img .ment"),
model = document.querySelector(".img img:nth-of-type(1)"),
item = document.querySelector(".img img:nth-of-type(2)"),
item2 = document.querySelector(".img img:nth-of-type(3)"),
range = document.getElementById("jsRange"),
rangebar = document.querySelector(".rangebar"),
rangeball = document.querySelector(".rangeball");

if(range){
  range.addEventListener("input", handleRangeChange);
}

function handleRangeChange(event){
  const blurLevel = event.target.value;
  wrap_bkd.style.opacity = blurLevel;
  wallpaper.style.opacity = blurLevel;
  for(var x = 0; x < ment.length; x++){
		ment[x].style.opacity = 1 - blurLevel;
		ment[0].style.left = -blurLevel*100 + "%";
		ment[1].style.right = `calc(${-blurLevel*100 + '%'} + 20px)`;
    console.log(ment[1].style.right);
	}
  model.style.transform = `translateX(-50%) rotateY(${blurLevel*200-200}deg)`;
  item.style.opacity = 1 - blurLevel;
  item.style.bottom = `calc(${-blurLevel*100 + '%'} + 6.5%)`;
  item2.style.opacity = 1 - blurLevel;
  item2.style.right = `calc(${-blurLevel*100 + '%'} + 10px)`;
  rangebar.style.width = blurLevel * 100 + '%';
  rangeball.style.left = blurLevel * 100 + '%';
  console.log(rangebar.style.width);
}
