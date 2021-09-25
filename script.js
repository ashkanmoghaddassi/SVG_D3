
d3.csv('cities.csv',d3.autoType).then(data=>{
	console.log('cities', data);
    
let european = data.filter(d => d.eu == true )
console.log(european);


const width = 700;
const height = 550;
const svg = d3.select('.population-plot')
		.append('svg')
        .attr('width', width)
        .attr('height', height)



svg.selectAll("circle")
    .data(european)
    .enter()
    .append("circle")
    .attr("class","circ")
    .attr('cx', function (d){
        return d.x;
     
    })
    .attr('cy', function (d){
        return d.y;
    })
    .attr('r',function(d){
        if (d.population<1000000){
            return 4;

        }
        else{
            return 8;
        }
    })

    svg.selectAll("text")
        .data(european)
        .enter()
        .append("text")
        .text(function(d){

            if (d.population>1000000){
                return d.city;
    
            }
            else if (d.population<1000000) {
                return null;
            }
        
        })
        .attr('dx', function (d){
            return d.x;
         
        })
        .attr('dy', function (d){
            return d.y-10;
        })
        .attr('font-size',11)
        .attr('text-anchor','right');
        
        
    })

    d3.csv('buildings.csv',d3.autoType).then(data=>{
        //console.log('buildings', data);

        let sorted = data.sort((a,b) => b.height_ft - a.height_ft);
        console.log(sorted);
        
        const width = 500;
        const height = 500;
        const svg = d3.select('.height-chart')
            .append('svg')
            .attr('width', width)
            .attr('height', height)

            svg.selectAll("rect")
            .data(sorted)
            .enter()
            .append("rect")
            .attr('width', d=> d.height_px)
            .attr('height', d=>20)
            .attr("class","rect")



            .attr('x', function (d){
                return 250;
             
            })
            .attr('y', function (d,i){
                return i*30;
            })
            .attr('fill','orange')
            .on('click',  (event,d)=> {
                d3.select('.building-name').text(d.building)
                d3.select('.height').text(d.height_ft)
                d3.select('.country').text(d.country)
                d3.select('.floors').text(d.floors)
                d3.select('.completed').text(d.completed)
                d3.select('.image')
                .attr('src',d.image)
        
            })
           

            svg.selectAll("text")
            .data(sorted)
            .enter()
            .append("text")
            .text(function(d){
    
               return d.building;
               
            })

            .attr('x', function (d){
                return 0;
             
            })
            .attr('y', function (d,i){
                return i*30 +15;
            })
            .attr('y', function (d,i){
                return i*30 +15;
            })
            

            svg.selectAll(".text1")
            .data(sorted)
            .enter()
            .append("text")
            .attr("class","text1")
            .text(function(d){
    
               return d.height_ft;
               
            })
            .attr('x',d=> d.height_px +180 )
            .attr('y', function (d,i){
                return i*30 +15;
            })


    
            
            
        })
        
            
            
    


            

    



