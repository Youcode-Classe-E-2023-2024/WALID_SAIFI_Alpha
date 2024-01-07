/**graphe pour lr porcentage des post par utilisateur */
console.log("data");
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    // Sélectionner les 10 premiers utilisateurs
    const selectedUsers = users.slice(0, 10);

    // Récupérer les données des messages (posts)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        // Filtrer les messages pour les 10 premiers utilisateurs
        const postsForSelectedUsers = posts.filter(post => selectedUsers.some(user => user.id === post.userId));

        // Calculer le nombre total de messages pour les 10 utilisateurs
        const totalPosts = postsForSelectedUsers.length;

        // Calculer le pourcentage de messages pour chaque utilisateur
        const percentages = selectedUsers.map(user => {
          const userPosts = postsForSelectedUsers.filter(post => post.userId === user.id);
          const userPercentage = (userPosts.length / totalPosts) * 100;
          return { userId: user.id, userName: user.name, percentage: userPercentage };
        });

        // Créer le graphique en cercle avec D3.js
        const svg = d3.select('#pieChart')
          .append('svg')
          .attr('width', 400)
          .attr('height', 400)
          .append('g')
          .attr('transform', 'translate(200,200)');

        const color = d3.scaleOrdinal().range(d3.schemeCategory10);

        const pie = d3.pie().value(d => d.percentage);
        const path = d3.arc().outerRadius(200).innerRadius(0);

        const arc = svg.selectAll('arc')
          .data(pie(percentages))
          .enter()
          .append('g');

        arc.append('path')
          .attr('d', path)
          .attr('fill', (d, i) => color(i));

        // Ajouter les pourcentages et noms d'utilisateurs
        arc.append('text')
          .attr('transform', d => `translate(${path.centroid(d)})`)
          .attr('dy', '0.35em')
          .text(d => `${d.data.userName}: ${d.data.percentage.toFixed(2)}%`)
          .style('text-anchor', 'middle')
          .style('font-size', '10px');
      });
  });









  // Récupérer les données
const data = [
    { type: 'posts', count: 100 },
    { type: 'comments', count: 500 },
    { type: 'albums', count: 100 },
    { type: 'photos', count: 5000 },
    { type: 'todos', count: 200 },
    { type: 'users', count: 10 }
  ];
  
  // Créer le graphique de type X-Y (scatter plot) avec D3.js
  const margin = { top: 20, right: 20, bottom: 40, left: 40 };
  const width = 400 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;
  
  const svg = d3.select("#graphxy")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
  
  // Échelles
  const xScale = d3.scaleBand()
    .domain(data.map(d => d.type))
    .range([0, width])
    .padding(0.1);
  
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.count)])
    .range([height, 0]);
  
  // Axes
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);
  
  // Ajouter les axes
  svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${height})`)
    .call(xAxis)
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("transform", "rotate(-45)");
  
  svg.append("g")
    .attr("class", "y-axis")
    .call(yAxis);
  
  // Ajouter les points du scatter plot
  svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.type) + xScale.bandwidth() / 2)
    .attr("cy", d => yScale(d.count))
    .attr("r", 8)
    .attr("fill", "red");  // Changer la couleur des points en rouge
  
  // Ajouter des étiquettes aux points
  svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text(d => d.count)
    .attr("x", d => xScale(d.type) + xScale.bandwidth() / 2)
    .attr("y", d => yScale(d.count) - 10)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .style("fill", "white");
  
  // Ajouter des titres
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.top + 20)
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .text("Types");
  
  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 20)
    .attr("dy", "1em")
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .text("Nombre");