const value = fetch("https://jsonplaceholder.typicode.com/users");
value
  .then((data) => data.json())
  .then((data1) => {
    for (i = 0; i < data1.length; i++) {
      console.log(data1[i]);
      const div = document.createElement("div");
      div.innerHTML = `<div class="card text-bg-primary mb-3 h-100 shadow" style="max-width: 18rem;">
      <div class="card-body">
        <h5 class="card-title"><b>Name: ${data1[i].name}</b></h5>
        <p class="card-text">Email: ${data1[i].email}</p>
        <p class="card-text">Street: ${data1[i].address.street}</p>
        <p class="card-text">City: ${data1[i].address.city}</p>
      </div>
    </div>`
    document.body.append(div)
    }
});