var projects = [
    {
        id: 1,
        title: "project-1",
        image: "https://picsum.photos/id/435/500/500",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officia repellat praesentium, aliquam deserunt cumque iusto doloremque sunt, minus vel obcaecati quasi molestiae veritatis quis? Ratione maxime aperiam eos quae.",
        live: "https://live.com/project-1",
        git: "https://github.com/project-1"
    },
    {
        id: 2,
        title: "project-2",
        image: "https://picsum.photos/id/541/500/500",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officia repellat praesentium, aliquam deserunt cumque iusto doloremque sunt, minus vel obcaecati quasi molestiae veritatis quis? Ratione maxime aperiam eos quae.",
        live: "https://live.com/project-2",
        git: "https://github.com/project-2"
    },
    {
        id: 3,
        title: "project-3",
        image: "https://picsum.photos/id/235/500/500",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officia repellat praesentium, aliquam deserunt cumque iusto doloremque sunt, minus vel obcaecati quasi molestiae veritatis quis? Ratione maxime aperiam eos quae.",
        live: "https://live.com/project-3",
        git: "https://github.com/project-3"
    },
    {
        id: 4,
        title: "project-4",
        image: "https://picsum.photos/id/265/500/500",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officia repellat praesentium, aliquam deserunt cumque iusto doloremque sunt, minus vel obcaecati quasi molestiae veritatis quis? Ratione maxime aperiam eos quae.",
        live: "https://live.com/project-4",
        git: "https://github.com/project-4"
    },
];

// projects
var projectBlock = document.querySelector(".project-cards");

projects.forEach(function(item,index){
    projectBlock.innerHTML += `<div class="card">
                <img src="${item?.image}" />
                <div class="content">
                    <h3> ${item?.title} </h3>
                     <details>
                        <summary>Description</summary>
                         <p> ${item?.desc} </p>
                     </details>
                    <div class="btn-group">
                        <button class="btn btn-success">Live</button>
                        <button class="btn btn-warning">Code</button>
                    </div>
                </div>
            </div>`;
});