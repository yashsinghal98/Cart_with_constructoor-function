function Cart() {
  let itemlist = [];
  let cost = 0;
  this.add = function (item) {
    try {
      if (itemlist.length === 10) {
        throw "cart full";
      }
    } catch (er) {
      console.log(er);
      return;
    }
    itemlist.push(item);
  };
  this.remove = function (id) {
    try {
      if (itemlist.length === 0) {
        throw "Cart Empty";
      }
    } catch (er) {
      console.log(er);
      return;
    }
    itemlist = itemlist.filter((el) => el.id !== id);
  };
  this.checkout = function () {
    try {
      if (itemlist.length === 0) throw "Cart Empty";
    } catch (er) {
      console.log(er);
      return;
    }
    for (let key1 of itemlist) {
      cost += key1.cost;
    }
    console.log(`Your total amount is=${cost}`);
    console.log("Checking Out");
    cost=0;
    itemlist = [];
  };
  this.empty = function () {
    itemlist = [];
    cost = 0;
  };
  Object.defineProperty(this, "itemlist", {
    get: function () {
      return itemlist;
    }
  });
  Object.defineProperty(this, "cost", {
    get: function () {
      return cost;
    }
  });
}
