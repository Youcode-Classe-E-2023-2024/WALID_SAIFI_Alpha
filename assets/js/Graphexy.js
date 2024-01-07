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
    .attr("transform", "rotate(-45)")
    .style("fill", "red"); // Changer la couleur des étiquettes de l'axe X en rouge

  svg.append("g")
    .attr("class", "y-axis")
    .call(yAxis)
    .selectAll("text")
    .style("fill", "red"); // Changer la couleur des étiquettes de l'axe Y en rouge

  svg.selectAll("line")
    .style("stroke", "red"); // Changer la couleur des lignes des axes en rouge
  
  // Ajouter les points du scatter plot
  svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.type) + xScale.bandwidth() / 2)
    .attr("cy", d => yScale(d.count))
    .attr("r", 8)
    .attr("fill", "red"); // Changer la couleur des points en rouge

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
    .style("fill", "red"); // Changer la couleur des étiquettes en rouge

  // Ajouter des titres
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.top + 20)
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .style("fill", "red") // Changer la couleur du titre en rouge
    .text("Types");
  
  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 20)
    .attr("dy", "1em")
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .style("fill", "red") // Changer la couleur du titre en rouge
    .text("Nombre");

  function imprimerGraphiques() {
    window.print();
  }