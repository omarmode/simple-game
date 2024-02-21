function character(name, strength, health) {
  this.name = name;
  this.strength = strength;
  this.health = health;

  //علشان ادمج زرارين ال attack بتوع ناروتو و ساساكي بكتب الاتي
  this.attackBtn = document.querySelector(`#${this.name}-attack`);
  this.healthBtn = document.querySelector(`#${this.name}-Make-health`);
  this.alive = document.querySelector(`#${this.name}-alive`);
  this.progress = document.querySelector(`.${this.name}-health span`);
}

character.prototype.attack = function (opponent) {
  //   console.log("this", this);
  //   console.log("opponent", opponent);
  //     //this==naruto
  //opponent==sasaki
  if (opponent.health > 0) {
    opponent.health -= this.strength;
    //يعني صحة sasaki هاتقل بمقدار قوة naruto
    opponent.progress.style.width = `${opponent.health}%`;
    //معناها ان شريط ال span هايقل بمقدار ضربة الخصم للصحة
  } else {
    opponent.attackBtn.remove();
    opponent.healthBtn.remove();
    opponent.alive.innerHTML = `${opponent.name} is died`;
  }
};

character.prototype.status = function () {
  console.log(`name=${this.name}`);
  console.log(`strength:${this.strength}`);
  console.log(`health:${this.health}`);
};
character.prototype.makeHealth = function () {
  if (this.health < 100) {
    this.health += 10;
    this.progress.style.width = `${this.health}%`;
  }
  if (this.health > 100) {
    this.health = 100;
  }
};
let naruto = new character("naruto", 10, 100);
let sasaki = new character("sasaki", 10, 100);
// opponent منافس
// naruto.attack(sasaki);
// //this عايده علي naruto علشان واخد attack
// // sasaki.attack(naruto);
// naruto.makeHealth();
// naruto.status();
naruto.attackBtn.addEventListener("click", function () {
  naruto.attack(sasaki);
  sasaki.status();
});
sasaki.attackBtn.addEventListener("click", function () {
  sasaki.attack(naruto);
  naruto.status();
});
naruto.healthBtn.addEventListener("click", function () {
  naruto.makeHealth();
});
sasaki.healthBtn.addEventListener("click", function () {
  sasaki.makeHealth();
});
