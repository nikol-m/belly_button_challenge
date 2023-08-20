// Function to draw your charts
function drawCharts(sample) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        // Filter the data based on the sample selected
        var filteredData = data.samples.filter(sampleObject => sampleObject.id == sample)[0];

        // Bar Chart
        var trace1 = {
            x: filteredData.sample_values.slice(0, 10).reverse(),
            y: filteredData.otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
            text: filteredData.otu_labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h"
        };
        var data1 = [trace1];
        let barLayout = {
            title: "Top 10 Samples",
            margin: {t: 30, b: 40},
            xaxis: {title: "Sample Values",
                    fixedrange: true},
        };
        Plotly.newPlot("bar", data1, barLayout);

        // Bubble Chart
        var trace2 = {
            x: filteredData.otu_ids,
            y: filteredData.sample_values,
            text: filteredData.otu_labels,
            mode: "markers",
            marker: {
                size: filteredData.sample_values,
                color: filteredData.otu_ids,
                colorscale: "Earth"
            }
        };
        var data2 = [trace2];
        var layout2 = { showlegend: false };
        Plotly.newPlot("bubble", data2, layout2);

        // Metadata
        var metadata = data.metadata.filter(meta => meta.id == sample)[0];
        var metaDataDisplay = d3.select("#sample-metadata");
        metaDataDisplay.html(""); // Clear existing metadata
        Object.entries(metadata).forEach(([key, value]) => { 
            metaDataDisplay.append("h5").text(`${key}: ${value}`);
        });

        // Gauge Chart for weekly washing frequency
        var washFreq = metadata.wfreq;
        var data3 = [
            {
                domain: { x: [0, 1], y: [0, 1] },
                value: washFreq,
                title: { text: "Belly Button Washing Frequency <br> Scrubs per Week" },
                type: "indicator",
                mode: "gauge+delta",
                delta: { reference: 0, increasing: { color: "MediumTurquoise" } },
                gauge: {
                    
                    axis: { 
                        range: [0, 9],
                        tickvals: [2, 4, 6, 8, 9],
                        ticks: "outside"
                    },
                    bar: { color: "black",
                            line:{
                                color:"goldenrod",
                                width:6,
                                
                            },
                            thickness:0},
                            
                    bgcolor: "white",
                    borderwidth: 2,
                    bordercolor: "gray",
                    steps: [
                      { range: [0, 2], color: "lightcyan"},
                      { range: [2, 4], color: "cyan" },
                      { range: [4, 6], color: "lightseagreen" },
                      { range: [6, 8], color: "darkcyan" },
                      { range: [8, 9], color: "teal" }
                    ],
                    threshold: {
                      line: { color: "red", width: 4 },
                      thickness: 0.75,
                      value: 490}
                }
            }
        ];
        var theta = 93.5
        var r = 0.7
        var x_head = r * Math.cos(Math.PI/180*theta)
        var y_head = r * Math.sin(Math.PI/180*theta)
        
        let layout = {
            width: 500,
            height: 400,
            margin: { t: 25, r: 25, l: 25, b: 25 },
            paper_bgcolor: "lavender",
            font: { color: "darkblue", family: "Arial" }
        };
        Plotly.newPlot('gauge', data3, layout);
    });
}

// Function to handle change on dropdown
function optionChanged(newSample) {
    drawCharts(newSample);
}

// Initial function to populate dropdown and draw charts
function init() {
    var dropdownMenu = d3.select("#selDataset");
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            dropdownMenu.append("option")
            .text(sample)
            .property("value", sample);
        });

        // Draw charts with first sample
        drawCharts(sampleNames[0]);
    });
}

// Call your init function
init();
