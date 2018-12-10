export default {
  rollDie: function() {
    // Return a random integer from 1 to 6
    return Math.floor(Math.random() * 6) + 1;
  },
  times: function(fn, numOfTimes) {
    // Return an array whose length is numOfTimes, and each item is a fn() result
    const arr = [];

    for (let i = 0; i < numOfTimes; i++) {
      arr.push(fn());
    }

    return arr;
  },
  createKeyCount: function(array) {
    // Return an object whose keys represent every unique value in the input array
    // and whose values represent the number of times that key was seen in the input array
    const obj = {};
    array.forEach(val => {
      if (obj[val] === undefined) {
        obj[val] = 1;
      } else {
        obj[val]++;
      }
    });
    return obj;
  },
  documentWriteObject: function(object) {
    // Side-effecting function: should write the object's keys and values directly to the document
    // in the format of
    // key: value<br>
    for (let key in object) {
      document.write(`${key}: ${object[key]}<br>`);
    }
  },
  createBarGraph: function(object) {
    // Return a DOM subtree containing all the elements needed to render a bar graph from the input object data
    const barGraph = document.createElement("div");
    for (let key in object) {
      const bar = document.createElement("div");
      bar.innerText = key;
      bar.style.color = "white";
      bar.style.backgroundColor = "grey";
      bar.style.width = object[key] + "px";
      bar.style.marginTop = "10px";
      bar.style.marginBottom = "10px";
      barGraph.appendChild(bar);
    }
    return barGraph;
  },
  execute: function() {
    const result = this.createKeyCount(
      this.times(() => this.rollDie() + this.rollDie(), 1000)
    );
    this.documentWriteObject(result);
    document.body.appendChild(this.createBarGraph(result));
  }
};
