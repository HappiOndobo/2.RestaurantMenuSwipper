const menuItems = [
    {
        id:1,
        item: "Food Item1",
        oneliner:"one:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, architecto.",
        img:"food1.jpg",
        hotel:"Hotel name1",
        desc:"One: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt asperiores provident deserunt accusantium laborum, in id aut possimus ratione amet."
    },
    {
        id:2,
        item: "Food Item2",
        oneliner:"Two:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, architecto.",
        img:"food2.jpg",
        hotel:"Hotel name2",
        desc:"Two: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt asperiores provident deserunt accusantium laborum, in id aut possimus ratione amet."
    },
    {
        id:3,
        item: "Food Item3",
        oneliner:"Three:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, architecto.",
        img:"food3.jpg",
        hotel:"Hotel name3",
        desc:"Three: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt asperiores provident deserunt accusantium laborum, in id aut possimus ratione amet."
    },
    {
        id:4,
        item: "Food Item4",
        oneliner:"four:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, architecto.",
        img:"food4.jpg",
        hotel:"Hotel name4",
        desc:"Four: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt asperiores provident deserunt accusantium laborum, in id aut possimus ratione amet."
    },
    {
        id:5,
        item: "Food Item5",
        oneliner:"Five:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, architecto.",
        img:"food5.jpg",
        hotel:"Hotel name5",
        desc:"Five: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt asperiores provident deserunt accusantium laborum, in id aut possimus ratione amet."
    }
]

const item=document.getElementById("item");
const oneLiner=document.getElementById("oneLiner");
const img=document.getElementById("img");
const hotel=document.getElementById("hotel");
const desc=document.getElementById("desc");
const prev=document.getElementById("prev-el");
const random=document.getElementById("random-el");
const next=document.getElementById("next-el");

let currentMenu = 0;

window.addEventListener('DOMContentLoaded', function(){
    /* let menu= menuItems[currentMenu];
    item.textContent= menu.item;
    oneLiner.textContent = menu.oneliner;
    img.src = menu.img;
    hotel.textContent = menu.hotel;
    desc.textContent = menu.desc; */
    allMenu(currentMenu)
});

const allMenu=()=>{
    let menu= menuItems[currentMenu];
    item.textContent= menu.item;
    oneLiner.textContent = menu.oneliner;
    img.src = menu.img;
    hotel.textContent = menu.hotel;
    desc.textContent = menu.desc;
}

random.addEventListener('click', function(){
    currentMenu=Math.floor(Math.random()*menuItems.length)
    allMenu(currentMenu);
    console.log("functioning its okay")
});

prev.addEventListener('click', function(){
    currentMenu--;
    if(currentMenu < 0){
        currentMenu=menuItems.length-1
    }
    allMenu(currentMenu);
});

next.addEventListener('click', function(){
    currentMenu++;
    if(currentMenu > menuItems.length-1){
        currentMenu=0;
    }
    allMenu(currentMenu);
});
















