import kaplay from "kaplay";

const k = kaplay({
    width: 1280,
    height: 720,
});

k.loadBean();
k.setGravity(2000);

const player = k.add([
    k.sprite("bean"), //the sprite
    k.pos(k.center()), //posicion
    k.area(), //hitbox
    k.body(), //gravity
    k.offscreen()
])

let counterJump = 0;

player.onKeyPress("space", () => {
    
    if(player.isGrounded() || counterJump ==1) {
        player.jump(500);
        counterJump++;
        
    }
    if(counterJump >=2) {
        counterJump = 0;
    }
    console.log(counterJump);
});

player.onKeyDown("d", () => {
    player.move(200, 0);
});

player.onKeyDown("a", () => {
    player.move(-200, 0);
});



player.onExitScreen( () => {
    k.go("gameover");
});

k.scene("gameover", () => {
    k.add([k.text("Game over"), k.pos(k.center())]);
});

k.add(
    [k.rect(k.width(), 300), 
        k.pos(0, 600), 
        k.area(), 
        k.body({isStatic: true}),
        k.outline(2),
    ]);


let counter = 0;
const counterUI = k.add([k.text("0")]); 
    

k.loop(1, () => {
   
    counter++;
    console.log(counter);
    counterUI.text = counter.toString();

   const speeds = [300, 500, 800, 1000, 1500];
   const actualspeed = speeds[Math.floor(Math.random() * speeds.length)];
   
    k.add([
        k.rect(50, 50),
        k.pos(0,500),
        k.area(),
        k.body(),
        k.outline(2),
        k.move(k.vec2(1, 0),actualspeed),
    ]);
});

